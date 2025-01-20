import React, { useState } from "react";
import "./test.css";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "The software solution provided by the project team of CleverDev Software innovated our product's performance. It seamlessly addresses logistics needs, streamlining workflows and boosting productivity. The web development mastery of the team has empowered us to establish a strong online presence, driving increased engagement and market reach.",
    author: "AI Logistics Solutions | Germany",
    source: "Clutch",
  },
  {
    id: 2,
    rating: 5,
    text: "CleverDev Software has been a great partner, giving us exactly what we needed to improve our warehouse operations. We highly recommend their services.",
    author: "Logistics & Supply Chain | USA",
    source: "Clutch",
  },
  {
    id: 3,
    rating: 4,
    text: "The team at CleverDev Software was extremely professional and delivered the project on time with excellent quality. Highly recommend!",
    author: "Healthcare Solutions | UK",
    source: "Clutch",
  },
  {
    id: 3,
    rating: 4,
    text: "The team at CleverDev Software was extremely professional and delivered the project on time with excellent quality. Highly recommend!",
    author: "Healthcare Solutions | UK",
    source: "Clutch",
  },
  {
    id: 3,
    rating: 4,
    text: "The team at CleverDev Software was extremely professional and delivered the project on time with excellent quality. Highly recommend!",
    author: "Healthcare Solutions | UK",
    source: "Clutch",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-slider">
      <h2><b>What Our Clients Say</b></h2>
      <div className="testimonial-container">
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="testimonial-card">
          <div className="rating">
            {"★".repeat(testimonials[currentIndex].rating)}
          </div>
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
          <p className="author">{testimonials[currentIndex].author}</p>
          <a href="#" className="source">
            {testimonials[currentIndex].source} →
          </a>
        </div>
        <button className="nav-btn next-btn" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <div className="pagination">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
