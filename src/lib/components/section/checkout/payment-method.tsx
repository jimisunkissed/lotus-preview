import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FlexImage } from '@/lib/components/flex/flex-image';
import { FlexInput } from '@/lib/components/flex/flex-input';
import { cn } from '@/lib/utils';
import { alphaSpaceRegex, numberRegex, stateSetter } from '@/lib/utils/general/state-util';
import { CircleQuestionMark, Lock } from 'lucide-react';
import React, { useState } from 'react';

export function PaymentMethod(): React.ReactNode {
  const [creditCard, setCreditCard] = useState({
    card_number: '',
    expiration_date: '',
    cvv: '',
    card_owner: '',
  });
  const [activeMenu, setActiveMenu] = useState<string | undefined>('stripe');

  return (
    <Accordion type="single" collapsible className="w-full" value={activeMenu} onValueChange={setActiveMenu}>
      <AccordionItem value="stripe">
        <AccordionTrigger showArrow={false} className="pb-0 hover:no-underline">
          <div
            className={cn(
              'flex h-[60px] w-full px-4 items-center gap-4 border border-primary cursor-pointer',
              activeMenu === 'stripe' ? 'border-neutral-700' : 'border-neutral-800'
            )}
          >
            <div
              className={cn(
                'h-5 w-5 rounded-full border-2 flex items-center justify-center',
                activeMenu === 'stripe' ? 'border-primary' : 'border-neutral-400'
              )}
            >
              {activeMenu === 'stripe' && <div className="h-2 w-2 rounded-full bg-primary" />}
            </div>
            <p className="text-[16px] font-medium">Stripe</p>

            <FlexImage
              image="https://cdn.iconscout.com/icon/free/png-256/free-stripe-2-498440.png?f=webp"
              alt="Payment Logo"
              className="relative h-8 w-8 ml-auto overflow-hidden"
            />
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col p-4 gap-4 border border-t-0 border-neutral-700">
          <FlexInput
            placeholder="Card Number"
            Icon={Lock}
            value={creditCard.card_number}
            onChange={(e) => stateSetter(setCreditCard, e.target.value, 'card_number', numberRegex)}
          />

          <div className="grid grid-cols-2 gap-4">
            <FlexInput
              placeholder="Expiration Date (MM/YY)"
              value={creditCard.expiration_date}
              onChange={(e) => stateSetter(setCreditCard, e.target.value, 'expiration_date')}
            />
            <FlexInput
              placeholder="Security Code"
              Icon={CircleQuestionMark}
              value={creditCard.cvv}
              onChange={(e) => stateSetter(setCreditCard, e.target.value, 'cvv', numberRegex)}
            />
          </div>

          <FlexInput
            placeholder="Name on Card"
            value={creditCard.card_owner}
            onChange={(e) => stateSetter(setCreditCard, e.target.value, 'card_owner', alphaSpaceRegex)}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
