import React from "react";
import "./indu.css";

const Industries = () => {
  const industries = [
    { name: "Healthcare", icon: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/636e119d0d7d5606aa69f480_icon-21.svg" },
    { name: "Manufacturing", icon: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/63ce4a1ac8b33aa6d42bbf51_icon-1.svg" },
    { name: "Logistics", icon: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/63ce4a1ba9b7eb2273635379_icon.svg" },
    { name: "Construction", icon: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/636e119d93894c3acf30686e_icon-25.svg" },
  ];
  const industrie = [
    { name: "Financial Services", icon: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/63ce4a1b950366a11cf3640e_icon-4.svg" },
    { name: "Retail", icon: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/636e119d0d7d5605a169f47f_icon-23.svg" },
    { name: "Real Estate", icon: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/636e119d124c7a30f6a568c0_icon-24.svg" },
    { name: "Insurance", icon: "https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/645f33a07dfa8db5baa0dbbf_Insurance%20Agenciess.png" },
  ];

  return (
    <section className="industries">
      <div className="industries-content">
        <h1>
          Industries <span className="green-text">We Work with</span>
        </h1>
        <p>
          CleverDev Software is a custom software engineering company with a solid technical
          background and a deep understanding of industry-specific challenges. Our team works
          across different verticals and domains, such as:
        </p>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-item" key={index}>
              <img src={industry.icon} alt={`${industry.name} Icon`} />
              <h3>{industry.name}</h3>
            </div>
          ))}
        </div>
        <div className="industries-grider">
          {industrie.map((industry, index) => (
            <div className="industry-item" key={index}>
              <img src={industry.icon} alt={`${industry.name} Icon`} />
              <h3>{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
