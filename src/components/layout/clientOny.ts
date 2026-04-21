'use client';
import { useEffect } from 'react';

import '@/src/styles/custom.scss';
import '@/src/app/globals.css';

export default function ClientOnly() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
