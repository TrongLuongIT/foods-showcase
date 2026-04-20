'use client';
import Navbar from './Navbar';
import { MenuInterface } from '@/src/helper/apiData/dataFormat';

export default function Header({ data }: { data: MenuInterface[] }) {
  return (
    <header className="container-fluid px-0 sticky-header">
      <div className="container px-0">
        <Navbar data={data} />
      </div>
    </header>
  );
}
