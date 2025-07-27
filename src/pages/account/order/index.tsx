import { AccountLayout } from '@/lib/components/section/account/account-layout';
import { AccountOrder } from '@/lib/components/section/account/account-order';
import React from 'react';

function Index(): React.ReactNode {
  return (
    <AccountLayout>
      <AccountOrder />
    </AccountLayout>
  );
}

export default Index;
