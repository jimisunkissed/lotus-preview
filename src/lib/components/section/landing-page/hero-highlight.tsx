import { HeroItem, HeroItemProps } from '@/lib/components/section/landing-page/hero-section';
import React from 'react';

type HeroHighlightProps = {
  items: HeroItemProps[];
};

export function HeroHighlight({ items }: HeroHighlightProps): React.ReactNode {
  return (
    <div className="flex flex-col w-full p-24 gap-28">
      {items.map((item, i) => (
        <HeroItem
          key={i}
          href={item.href}
          category={item.category}
          title={item.title}
          image={item.image}
          ar={item?.ar}
          align={i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
          className={item?.className}
        />
      ))}
    </div>
  );
}
