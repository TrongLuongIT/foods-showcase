'use client';

import { useState, useCallback, useEffect } from 'react';
import { SocialMediaInterface } from '@/src/helper/apiData/dataFormat';
import SocialModal from './SocialModal';
import SocialItem from './SocialItem';

interface TiktokModalProps {
  socialList: SocialMediaInterface[];
}

export default function SocialListWrapper({ socialList }: TiktokModalProps) {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const handleClick = useCallback((link: string) => {
    setSelectedLink(link);
  }, []);

  useEffect(() => {}, [socialList]);

  const onCloseModal = useCallback(() => setSelectedLink(null), []);

  return (
    <div>
      <div className="row">
        {socialList.map((social) => (
          <SocialItem key={social.id} social={social} onClick={handleClick} />
        ))}
      </div>
      <SocialModal url={selectedLink} onClose={onCloseModal} />
    </div>
  );
}
