import React, { useState } from "react";
import "./service.css";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    { title: "Custom Web Application Development", content: "Details about custom web application development services." },
    { title: "Custom Cloud-Based Application Development", content: "Details about custom cloud-based application development services." },
    { title: "Cloud Migration and App Modernization", content: "Details about cloud migration and app modernization services." },
    { title: "Custom Web Application Development", content: "Details about custom web application development services." },
    { title: "Custom Cloud-Based Application Development", content: "Details about custom cloud-based application development services." },
    { title: "Cloud Migration and App Modernization", content: "Details about cloud migration and app modernization services." },
    { title: "Custom Web Application Development", content: "Details about custom web application development services." },
    { title: "Custom Cloud-Based Application Development", content: "Details about custom cloud-based application development services." },
    { title: "Cloud Migration and App Modernization", content: "Details about cloud migration and app modernization services." },
    
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h1>
          Custom Software Development Services<span className="highlight"> We Provide</span>
        </h1>
        <p>
          A seasoned software development firm, we have built up competencies to empower a wide range of solutions to
          introduce automation into your business processes. Our expert team of certified engineers and developers
          employs a unique combination of trending technologies and components to create flexible, secure, and
          competitive digital products.
        </p>
        <div className="accordion">
          {services.map((service, index) => (
            <div
              className={`accordion-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="accordion-title"
                onClick={() => toggleAccordion(index)}
              >
                <span>{service.title}</span>
                <span>{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{service.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
