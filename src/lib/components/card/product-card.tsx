import { formatNumber } from '@/lib/utils/general/number-util';
import { ProductProps } from '@/types/temp-shop';
import React from 'react';

type ProductCardProps = {
  product: ProductProps;
};

export function ProductCard({ product }: ProductCardProps): React.ReactNode {
  return (
    <article className="group flex flex-col w-full cursor-pointer">
      <div className="aspect-square w-full p-2 overflow-hidden">
        <img src={product.images[0]} alt="Product Image" className="h-full w-full object-contain" />
      </div>

      <p className="h-6 text-xs font-medium text-neutral-500">{product?.availability}</p>
      <strong className="text-sm font-medium group-hover:text-neutral-500 line-clamp-2">{product.title}</strong>
      <p className="text-sm text-neutral-500">Rp {formatNumber(product.price)}</p>
    </article>
  );
}
