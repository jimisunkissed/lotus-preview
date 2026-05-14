import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLayoutStore } from '@/hooks/layout-store';
import { FlexButton } from '@/lib/components/flex/flex-button';
import { cn } from '@/lib/utils';
import { alphaSpaceRegex, emailRegex, simpleEmailRegex, stateSetter } from '@/lib/utils/general/state-util';
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
  const { openAuth, setOpenAuth } = useLayoutStore();
  const [active, setActive] = useState<'login' | 'signup'>('login');
  const [form, setForm] = useState<FormProps>(baseForm);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const login = async () => {
    setError(new Error('Authentication is not available in preview mode'));
  };

  const signup = async () => {
    setError(new Error('Authentication is not available in preview mode'));
  };

  const MenuButton = ({ text }: MenuButtonProps) => {
    const stateName = text.toLowerCase().replace(' ', '');
    return (
      <FlexButton
        variant="ghost"
        className={cn(
          'h-fit w-fit p-0 text-2xl',
          active === stateName ? 'text-primary hover:opacity-100' : 'text-primary/40 hover:text-primary'
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
