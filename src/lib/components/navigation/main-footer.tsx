import { FlexSeparator } from '@/lib/components/flex/flex-separator';
import Link from 'next/link';
import React from 'react';

export function MainFooter(): React.ReactNode {
  const left1: string[] = ['JOBS', 'SHOP', 'APP', 'MEMBERSHIP'];
  const left2: string[] = ['TERMS OF USE', 'PRIVACY POLICY', 'DO NOT SELL OR SHARE MY PERSONAL INFORMATION'];
  const mid: string[] = ['INSTAGRAM', 'TWITTER', 'YOUTUBE', 'TIKTOK'];

  const Mapper = ({ links }: { links: string[] }) => (
    <div className="flex flex-col gap-2.5">
      {links.map((link, i) => (
        <Link key={i} href="/" className="w-fit text-[15px] leading-none hover:underline cursor-pointer">
          {link}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col h-fit w-full px-[45px] py-[50px] gap-[45px] mt-auto bg-black">
      <div className="grid grid-cols-4 w-full gap-[45px] text-white">
        <div className="flex flex-col h-full w-full gap-6">
          <Mapper links={left1} />
          <Mapper links={left2} />
        </div>

        <div className="relative flex flex-col h-full w-full justify-end">
          <div className="absolute top-0 left-0 flex flex-col w-full">
            <FlexSeparator label="more lotu5" theme="dark" />
          </div>
          <Mapper links={mid} />
        </div>

        <div className="relative col-span-2 flex flex-col h-full w-full justify-end">
          <div className="absolute top-0 left-0 flex flex-col w-full">
            <FlexSeparator label="want more lotu5?" theme="dark" />
          </div>

          <div className="flex flex-col w-full gap-6">
            <p className="max-w-88 leading-none">
              Get our emails. Letters from our filmmakers, new trailers, podcasts, merch, and more. Not too often <br />— just enough.
            </p>

            <div className="flex h-16 w-full border-1 border-white">
              <div className="relative flex flex-1 h-full">
                <label className="absolute top-2 left-4 text-[9px]">EMAIL</label>
                <input className="h-full w-full px-4 font-medium outline-none" />
              </div>
              <button className="h-full w-48 bg-white text-black cursor-pointer">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-neutral-500">© 2025 LOTU5</p>
    </div>
  );
}
