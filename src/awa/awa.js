import React from "react";
import "./awa.css";

const Marquee = () => {
  const images = [
    "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/62d71f9e35761c12be622a6f_1_50iZgSa4igEspkVLg9cjzw%201.png",
    "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/67062d782e79525f33a50e75_badge-most-reviewed-wearable-app-developers.png",
    "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/66337f3f06ba129b19f1a23b_badge-top-healthcare-software-development-companies%201.svg",
    "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/663b48f1bb2c79c59a761e02_badge-scrum-psmi.svg",
    "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/67062dd37459991d8a55b734_badge-top_clutch.co_it_service_management_consulting_company_poland_2024.png",
    "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/668d0cabf0cfceac223c709b_badge-b93dec71-8cfa-4305-a817-5de6527b1deb.svg",
    "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/663b491d230cd7be82514bbd_badge-scrum-pspoi.svg",
    "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/645b6a360db7d92997aacfab_top-website-development-companies.svg",
    "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/62df81589f89245a0c685d24_1_T59fnCvp71WqNeuytWGorA%202.png",
    
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {images.map((src, index) => (
          <img src={src} alt={`Award ${index + 1}`} className="marquee-item" key={index} />
        ))}
        {images.map((src, index) => (
          <img src={src} alt={`Award Duplicate ${index + 1}`} className="marquee-item" key={index + images.length} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
