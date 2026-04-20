'use client';

import { useRouter } from 'next/navigation';
import ImageCard from '../common/ImageCard';

export interface ProductItemProps {
  product: {
    id: number;
    name: string;
    image: string;
  };
}

export default function ProductItem({ product }: ProductItemProps) {
  const router = useRouter();

  const onClickMenu = () => {
    router.push('/about');
  };

  return (
    <div className="col-6 col-md-3 mt-4" key={product.id}>
      <div className="pointer" onClick={onClickMenu}>
        <ImageCard
          src={product.image}
          alt={product.name}
          title={product.name}
          className="box-shadow"
        />
      </div>
    </div>
  );
}
