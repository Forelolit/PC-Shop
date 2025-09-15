import { HeroBlock, ProductsBlock } from '@modules/mainModule';
import { type FC } from 'react';

export const HomePage: FC = () => {
  return (
    <>
      <HeroBlock />
      <ProductsBlock />
    </>
  );
};
