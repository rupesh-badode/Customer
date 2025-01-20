import React, { useState } from "react";
import "./health.css";

const slides = [
  {
    id: 1,
    title: "X12 EDI Integration with Healthcare & Insurance Companies Case Study",
    description:
      "Our advanced X12 integration solution fully connects our client with insurance providers, streamlining processes. This custom software ensures secure and fast claim cycles, reduces non- or partly-paid claims, and enhances business workflows. As a result, the billing lag has been cut from 3 months to just 1 day.",
    image: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/643e6ea5989cf6554b78b818_Case_11-p-800.png", // Replace with the actual image path
    link: "#",
  },
  {
    id: 2,
    title: "Custom Digital Healthcare Platform Development",
    description:
      "Explore our digital healthcare platform created for post-acute care facilities. This solution improves omnichannel healthcare delivery by connecting patients, doctors, and administrators while ensuring privacy.",
    image: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/661d24105ba54300bdf2fb7e_case-p-800.png", // Replace with the actual image path
    link: "#",
  },
  {
    id: 3,
    title: "Custom Digital Healthcare Platform Development",
    description:
      "Explore our digital healthcare platform created for post-acute care facilities. This solution improves omnichannel healthcare delivery by connecting patients, doctors, and administrators while ensuring privacy.",
    image: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/654c9574ddbf8280253e2e6c_case-14-card-p-800.png", // Replace with the actual image path
    link: "#",
  },
  {
    id: 4,
    title: "Custom Digital Healthcare Platform Development",
    description:
      "Explore our digital healthcare platform created for post-acute care facilities. This solution improves omnichannel healthcare delivery by connecting patients, doctors, and administrators while ensuring privacy.",
    image: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/643e6ea761adbb62719afc46_Case_9-p-800.png", // Replace with the actual image path
    link: "#",
  },
  {
    id: 5,
    title: "Custom Digital Healthcare Platform Development",
    description:
      "Explore our digital healthcare platform created for post-acute care facilities. This solution improves omnichannel healthcare delivery by connecting patients, doctors, and administrators while ensuring privacy.",
    image: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/6668ae6df80f6acecadb9946_case-14-p-800.png", // Replace with the actual image path
    link: "#",
  },
  {
    id: 6,
    title: "Custom Digital Healthcare Platform Development",
    description:
      "Explore our digital healthcare platform created for post-acute care facilities. This solution improves omnichannel healthcare delivery by connecting patients, doctors, and administrators while ensuring privacy.",
    image: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/632c645f1cc90ed2dbdbcae7_case-02-card-p-800.webp", // Replace with the actual image path
    link: "#",
  },
  {
    id: 7,
    title: "Custom Digital Healthcare Platform Development",
    description:
      "Explore our digital healthcare platform created for post-acute care facilities. This solution improves omnichannel healthcare delivery by connecting patients, doctors, and administrators while ensuring privacy.",
    image: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/632c643698cece57d268d0b6_case-01-card-p-800.webp", // Replace with the actual image path
    link: "#",
  },
  // Add more slides if needed
];

const HealthCareSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="slider-container">
      <button className="nav-btn prev-btn" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="slider-content">
        <div className="slider-image">
          <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
        </div>
        <div className="slider-text">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
          <a href={slides[currentIndex].link} className="view-more">
            VIEW MORE →
          </a>
        </div>
      </div>
      <button className="nav-btn next-btn" onClick={handleNext}>
        &#8250;
      </button>
      
    </div>
    <div className="pagination">
    {slides.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentIndex ? "active" : ""}`}
        onClick={() => setCurrentIndex(index)}
      ></span>
    ))}
  </div>
  </>
  );
};

export default HealthCareSlider;
