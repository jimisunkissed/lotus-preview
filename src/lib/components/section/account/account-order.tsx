import { FlexSeparator } from '@/lib/components/flex/flex-separator';
import React from 'react';

export function AccountOrder(): React.ReactNode {
  return (
    <div className="hidden lg:grid lg:grid-cols-5 w-full">
      <FlexSeparator label="order no." />
      <FlexSeparator label="date" />
      <FlexSeparator label="payment status" />
      <FlexSeparator label="fulfillment status" />
      <FlexSeparator label="total" align="end" />
    </div>
  );
}
