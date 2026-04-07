import { Suspense } from "react";

import ProductList from "@/src/components/products/ProductList";
import SocialList from "@/src/components/socialMedia/SocialList";
import GoogleMap from "../components/GoogleMap";
import HomeBanner from "../components/HomeBanner";

function ProductSkeleton(){
  return (
    <div className="row">
        {
          Array.from({length:8}).map((value, key) => (
            <div className="col-6 col-md-3" key={key}>
              <div className="box-shadow pointer" >
                <div className="aspect-square bg-gray-100 relative" style={{height: 100, width: 100}}>
                  <div className="object-cover w-full h-full bg-gray-300" />
                </div>
                <div className="title-product p-2">Day la title</div>
              </div>
            </div>
          ))
        }
      </div>
  );
}

export default function Home() {
  return (
    <>
      <HomeBanner />

      <div className="dark-mode">
        <div className="container py-5">
          <div className="title-category">Món Hàn tại đây</div>
          <Suspense fallback={<ProductSkeleton />}>
            <ProductList />
          </Suspense>
        </div>
      </div>

      <div className="brand-mode-2">
        <div className="container py-5">
          <div className="title-category">Thông tin Kokoria</div>
          <SocialList />
        </div>
      </div>


      <div className="container py-5">
        <div className="title-category">Rất nhiều chi nhánh</div>
        <GoogleMap/>
      </div>
    </>
  );
}
