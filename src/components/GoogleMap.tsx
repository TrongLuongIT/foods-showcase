'use client';

import { useState } from 'react';
import Image from 'next/image';
import { brandList } from '@/src/helper/constants/constantData';

export default function GoogleMap() {
  const [ggMapLink, setGgMapLink] = useState<string | undefined>(undefined);

  const onClickMap = () => {
    setGgMapLink(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.9976264987912!2d106.67412225666409!3d10.771144991658767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ff067f8673d%3A0x1cd441dc210a95a0!2sKokoria!5e0!3m2!1svi!2s!4v1774283043753!5m2!1svi!2s'
    );
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6">
        {brandList.map((brand) => (
          <div key={brand.name} className="mb-2 mt-2">
            🏡 {brand.name}: {brand.address}
            <br />
            📞 Đường dây nóng: <a href={`tel:${brand.phone}`}>{brand.phone}</a>
            <br />
          </div>
        ))}
      </div>
      <div className="col-12 col-md-6">
        <div className="text-center ratio ratio-1x1">
          {!ggMapLink ? (
            <Image
              src="/images/ggmap.png"
              alt="Map"
              fill
              style={{ objectFit: 'cover' }}
              className="pointer"
              onClick={onClickMap}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <iframe
              src={ggMapLink}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
