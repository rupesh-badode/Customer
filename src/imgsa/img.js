import React from "react";
import "./img.css";

const mageSlider = () => {
  return (
    <div className="marquee-container">
      {/* Right-to-left slide */}
      <div className="marquee marquee-right">
        <div className="marquee-content">
          <span>Right to Left Slide 1</span>
          <span>Right to Left Slide 2</span>
          <span>Right to Left Slide 3</span>
        </div>
      </div>

      {/* Left-to-right slide */}
      <div className="marquee marquee-left">
        <div className="marquee-content">
          <span>Left to Right Slide 1</span>
          <span>Left to Right Slide 2</span>
          <span>Left to Right Slide 3</span>
        </div>
      </div>
    </div>
  );
};

export default mageSlider;
