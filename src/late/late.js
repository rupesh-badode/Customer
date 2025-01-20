import React from "react";
import "./late.css";

const Insights = () => {
  const insights = [
    {
      title: "Salesforce for Healthcare — Top Integrations and Applications You Need",
      description:
        "Do you wish there was a way to simplify administrative processes, boost operational efficiency, and improve care? Salesforce for healthcare, with its robust platform, has...",
      author: "Anastasiya Kastiukovich",
      role: "Tech & Innovation Expert",
      date: "January 17, 2025",
      image: "https://cdn.prod.website-files.com/60e415645df2bb9a8fab7fdf/678a10d441614d9bbdea6ae0_blog-card.png", // Replace with actual image path
    },
    {
      title: "Access Management in Healthcare: IAM vs. PAM vs. MFA",
      description:
        "With the rising trend of remote and hybrid work, you might find yourself needing to carefully assess the devices used by employees to access corporate networks. To meet this...",
      author: "Anastasiya Kastiukovich",
      role: "Tech & Innovation Expert",
      date: "December 19, 2024",
      image: "https://cdn.prod.website-files.com/60e415645df2bb9a8fab7fdf/6763e85b20002be74abee160_blog-card-p-800.png", // Replace with actual image path
    },
  ];

  return (
    <div className="insights-container">
      <h2><b>Latest Insights</b></h2>
      <a href="#" className="see-all-link">SEE ALL INSIGHTS</a>
      <div className="insights-grid">
        {insights.map((insight, index) => (
          <div key={index} className="insight-card">
            <img src={insight.image} alt={insight.title} className="insight-image" />
            <div className="insight-content">
              <h3 className="insight-title">{insight.title}</h3>
              <p className="insight-description">{insight.description}</p>
              <div className="insight-footer">
                <p className="insight-author">
                  {insight.author} <span className="insight-role">{insight.role}</span>
                </p>
                <p className="insight-date">{insight.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
