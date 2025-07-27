import { AccountDetails } from '@/lib/components/section/account/account-details';
import { AccountLayout } from '@/lib/components/section/account/account-layout';
import React from 'react';

function Index(): React.ReactNode {
  return (
    <AccountLayout>
      <AccountDetails />
    </AccountLayout>
  );
}

export default Index;
