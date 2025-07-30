import { FlexSeparator } from '@/lib/components/flex/flex-separator';
import React from 'react';

export function AccountRent(): React.ReactNode {
  return (
    <div className="grid grid-cols-5 w-full">
      <FlexSeparator label="order no." />
      <FlexSeparator label="date" />
      <FlexSeparator label="payment status" />
      <FlexSeparator label="duration left" />
      <FlexSeparator label="total" align="end" />
    </div>
  );
}
