import React from "react";
import "./stat.css";

const Statistics = () => {
  const stats = [
    {
      number: "15+",
      title: "Years of Automating Business Processes and Building Apps",
      description:
        "At CleverDev Software, we have an expert team of vetted developers with ample experience in automating business processes and building apps of different sizes and complexity.",
    },
    {
      number: "50+",
      title: "Talented Professionals",
      description:
        "Our team's proficiency in the latest technologies and programming languages allows us to choose the right technology stack for your specific needs.",
    },
    {
      number: "98%",
      title: "Client Retention Rate",
      description:
        "We believe in reliable partnership. Our company builds open, transparent, and trusting relationships with our clients and is always ready to assist you in your tech endeavors.",
    },
    {
      number: "30+",
      title: "Countries",
      description:
        "Over the years, we’ve worked with clients across different geographies, including the US, UK, and other countries.",
    },
  ];

  return (
    <section className="statistics">
      <div className="statistics-grid">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h1 className="stat-number">{stat.number}</h1>
            <h2 className="stat-title">{stat.title}</h2>
             <hr/>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
