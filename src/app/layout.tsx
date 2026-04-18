import type { Metadata } from "next";
import { Toaster } from 'sonner';

import ClientOnly from "@/src/components/layout/clientOny";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import Brand from "@/src/components/brand";
import { BRAND_INFO } from "../helper/constantData";
import { getGlobalData } from "../services/global-service";


export const metadata: Metadata = {
  title: BRAND_INFO.NAME,
  description: BRAND_INFO.SLOGAN,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const globalData = await getGlobalData();

  return (
    <html lang="en">
      <ClientOnly/>
      <body>
        <Header data={globalData.header}/>
        <Toaster position="top-right" richColors closeButton/>

        <main className="container-fluid px-0">
          {children}
        </main>

        <Brand/>
        <Footer data={globalData.footer}/>

      </body>
    </html>
  );
}
