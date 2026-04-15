"use client";

import { MOCK_IMAGES } from "@/src/helper/mockData";
import ImageCard from "@/src/components/common/ImageCard";


export default function BrandReason() {
  return (
    <div className="dark-mode">
      <div className="container">
        <div className="row pt-5 mt-3 pb-4">
          <div className="col title-category">
            <div className="text-danger fw-bold text-uppercase">Kokoria ?</div>
            <div>Tại sao chọn chúng tôi?</div>
          </div>
        </div>
        <div className="row align-items-center py-5">
          {
            MOCK_IMAGES.map((image) => (
              <div className="col-md-4" key={image.id}>
                <ImageCard src={image.src} alt={image.alt} title={image.title} description={image.description} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
