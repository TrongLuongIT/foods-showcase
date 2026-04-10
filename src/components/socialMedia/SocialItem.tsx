"use client";
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { SocialMediaInterface } from "@/src/helper/dataFormat";
import ImageCard from "../common/ImageCard";

const SocialItem = memo(({ social, onClick }: { social: SocialMediaInterface; onClick: (url: string) => void }) => {

  console.log("1111", social.id);
  return (
    <div className="col-6 col-md-3 mt-3 pointer" onClick={() => onClick(social.link)}>
      <ImageCard 
        src={social.thumbnail}
        alt={`Social media thumbnail ${social.id}`}
        ratio="9/16"
      >
        <div className="position-absolute top-50 start-50 translate-middle">
          <div 
          className="d-flex align-items-center justify-content-center rounded-circle border border-white border-opacity-50 shadow-lg"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Nền trắng mờ
            backdropFilter: "blur(4px)", // Hiệu ứng mờ kính (Glassmorphism)
          }}
          >
          <FontAwesomeIcon 
            icon={faPlay} 
            className="text-white fs-4 ps-1" // ps-1 để icon play trông cân đối hơn trong vòng tròn
          />
          </div>
          </div>
      </ImageCard>
    </div>
  );
});

export default SocialItem;