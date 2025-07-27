import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuthStore } from '@/hooks/auth-store';
import { useLayoutStore } from '@/hooks/layout-store';
import { FlexButton } from '@/lib/components/flex/flex-button';
import { supabase } from '@/lib/config/supabase-client-config';
import { cn } from '@/lib/utils';
import { alphaSpaceRegex, emailRegex, simpleEmailRegex, stateSetter } from '@/lib/utils/general/state-util';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type MenuButtonProps = {
  text: string;
};

type FormProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const baseForm = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirm: '',
};

export function AuthModal(): React.ReactNode {
  const { setUserId, setEmail, setFirstName, setLastName } = useAuthStore();
  const { openAuth, setOpenAuth } = useLayoutStore();
  const [active, setActive] = useState<'login' | 'signup'>('login');
  const [form, setForm] = useState<FormProps>(baseForm);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const login = async () => {
    setLoading(true);
    try {
      const validate = await supabase.rpc('validate_signup_email', { user_email: form.email });
      if (!validate.data?.cleaned_email) throw new Error('Please use a valid email');

      const credential = await supabase.auth.signInWithPassword({
        email: validate.data?.cleaned_email,
        password: form.password,
      });
      if (credential.error) throw new Error(credential.error.message);

      setOpenAuth(false);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const signup = async () => {
    try {
      setLoading(true);

      if (Object.values(form).some((v) => !v)) throw new Error('Please fill out the forms');
      if (form.password !== form.password_confirm) throw new Error('Password does not match password confirmation');
      if (!emailRegex.test(form.email)) throw new Error('Please use a valid email');

      const validate = await supabase.rpc('validate_signup_email', { user_email: form.email });
      if (!validate.data?.is_unique || !validate.data?.cleaned_email) throw new Error('Email is already credentialed');

      const credential = await supabase.auth.signUp({
        email: validate.data?.cleaned_email,
        password: form.password,
        options: {
          data: {
            first_name: form.first_name,
            last_name: form.last_name,
          },
        },
      });
      if (credential.error) throw new Error(credential.error.message);

      // const { sub, email, first_name, last_name } = credential?.data?.user?.user_metadata ?? {};

      // setUserId(sub);
      // setEmail(email!);
      // setFirstName(first_name);
      // setLastName(last_name);
      setOpenAuth(false);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const MenuButton = ({ text }: MenuButtonProps) => {
    const stateName = text.toLowerCase().replace(' ', '');
    return (
      <FlexButton
        variant="ghost"
        className={cn(
          'h-fit w-fit p-0 text-2xl',
          active === stateName ? 'text-black hover:text-black' : 'text-neutral-400 hover:text-neutral-700'
        )}
        text={text.toUpperCase()}
        onClick={() => setActive(stateName as 'login' | 'signup')}
      />
    );
  };

  useEffect(() => {
    setForm(baseForm);
    setActive('login');
    setError(null);
  }, [openAuth]);

  useEffect(() => {
    setForm(baseForm);
    setError(null);
  }, [active]);

  return (
    <Dialog open={openAuth} onOpenChange={setOpenAuth}>
      <DialogContent className="rounded-none">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-3">
              <MenuButton text={'log in'} />
              <MenuButton text={'sign up'} />
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col w-full justify-center gap-6 my-4">
          {active === 'signup' && (
            <div className="grid grid-cols-2 w-full my-4 gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-neutral-500">FIRST NAME</label>
                <input
                  className="border-b outline-none text-md"
                  value={form.first_name}
                  onChange={(e) => stateSetter(setForm, e.target.value, 'first_name', alphaSpaceRegex)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-neutral-500">LAST NAME</label>
                <input
                  className="border-b outline-none text-md"
                  value={form.last_name}
                  onChange={(e) => stateSetter(setForm, e.target.value, 'last_name', alphaSpaceRegex)}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-neutral-500">EMAIL</label>
            <input
              className="border-b outline-none text-md"
              value={form.email}
              onChange={(e) => stateSetter(setForm, e.target.value, 'email', simpleEmailRegex, true)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-neutral-500">PASSWORD</label>
            <input
              type="password"
              className="border-b outline-none text-md"
              value={form.password}
              onChange={(e) => stateSetter(setForm, e.target.value, 'password')}
            />
          </div>

          {active === 'signup' && (
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-neutral-500">CONFIRM PASSWORD</label>
              <input
                type="password"
                className="border-b outline-none text-md"
                value={form.password_confirm}
                onChange={(e) => stateSetter(setForm, e.target.value, 'password_confirm')}
              />
            </div>
          )}

          {active === 'login' && (
            <FlexButton size="sm" variant="link" className="h-fit w-fit p-0 text-xs text-neutral-500" text="Forgot Password?" />
          )}

          <p className="min-h-8 text-sm text-red-600">{error?.message}</p>
        </div>

        <DialogFooter>
          <FlexButton
            size="lg"
            text={active === 'login' ? 'LOG IN' : 'SIGN UP'}
            className="w-full"
            iconCn="min-h-5 min-w-5"
            loading={loading}
            onClick={() => (active === 'login' ? login() : signup())}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
