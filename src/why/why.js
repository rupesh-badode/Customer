import React from "react";
import "./why.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="content">
        {/* Left Content */}
        <div className="text">
          <h1>Why Choose Us as Your Software Development Company?</h1>
          <p>
            <span className="highlight">CleverDev Software</span> is a custom software development company with an impressive list of releases to satisfied clients from more than 30 countries across the globe.
          </p>
        </div>
        {/* Right Image */}
        <div className="image">
          <img src="https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/662118d92c153e2b26d44970_photo-2.webp" alt="CleverDev Team" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
