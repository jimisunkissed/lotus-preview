import { AccountLayout } from '@/lib/components/section/account/account-layout';
import { AccountRent } from '@/lib/components/section/account/account-rent';
import React from 'react';

function Index(): React.ReactNode {
  return (
    <AccountLayout>
      <AccountRent />
    </AccountLayout>
  );
}

export default Index;
