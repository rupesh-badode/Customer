import React from "react";
import "./nav.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Alexandra Tech Lab</h1>
          <h2>For Your Next Project</h2>
          <p className="par"> 
            Building on its 15+ years of experience, CleverDev Software assists companies
            across verticals in building superior software with edgy functionality and
            accelerated time to market. As a client-first software development company,
            we solve your unique business challenges with a wide tech stack and flexible approaches.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Contact Us</button>
            <button className="btn-secondary">View Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
