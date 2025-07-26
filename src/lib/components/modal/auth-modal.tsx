import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAppStore } from '@/hooks/app-store';
import { cn } from '@/lib/utils';
import { alphaSpaceRegex, simpleEmailRegex, stateSetter } from '@/lib/utils/general/state-util';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type MenuButtonProps = {
  label: string;
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
  const { openAuth, setOpenAuth } = useAppStore();
  const [active, setActive] = useState<'login' | 'signup'>('login');
  const [form, setForm] = useState<FormProps>(baseForm);

  const handleAuth = async () => {
    try {
    } catch (error) {
      throw error;
    }
  };

  const MenuButton = ({ label }: MenuButtonProps) => {
    const stateName = label.toLowerCase().replace(' ', '');
    return (
      <button
        className={cn('text-2xl cursor-pointer transition-all', active === stateName ? 'text-black' : 'text-neutral-400 hover:text-neutral-700')}
        onClick={() => setActive(stateName as 'login' | 'signup')}
      >
        {label.toUpperCase()}
      </button>
    );
  };

  useEffect(() => {
    if (openAuth) setActive('login');
  }, [openAuth]);

  useEffect(() => {
    setForm(baseForm);
  }, [active]);

  return (
    <Dialog open={openAuth} onOpenChange={setOpenAuth}>
      <DialogContent className="rounded-none">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-3">
              <MenuButton label={'log in'} />
              <MenuButton label={'sign up'} />
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col w-full gap-6 my-4">
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
            <button type="button" className="w-fit text-start text-xs text-neutral-500 underline hover:no-underline cursor-pointer">
              Forgot Password?
            </button>
          )}
        </div>

        <DialogFooter>
          <button
            className="h-16 w-full bg-black hover:bg-neutral-500 text-lg text-white cursor-pointer transition-all duration-300"
            onClick={handleAuth}
          >
            {active === 'login' ? 'LOG IN' : 'SIGN UP'}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
