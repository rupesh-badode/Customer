import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What is Software Development?", answer: "Software development is the process of creating, designing, deploying, and supporting software." },
    { question: "Why Choose Custom Software Development?", answer: "Custom software development provides tailored solutions to meet specific business needs, improving efficiency and competitiveness." },
    { question: "What are the Advantages of Custom Software Development?", answer: "Advantages include scalability, flexibility, enhanced security, and tailored functionality for your business." },
    { question: "What are the Phases of Custom Software Development?", answer: "The phases include requirement analysis, design, development, testing, deployment, and maintenance." },
    { question: "How to Choose Custom Software Development Company?", answer: "Research the company's portfolio, expertise, client reviews, and ensure they align with your business requirements." },
    { question: "How to Find Companies Looking for Custom Software Development?", answer: "Check online platforms like Clutch, GoodFirms, and LinkedIn to find businesses seeking custom software solutions." },
    { question: "How Much does Custom Software Development Cost?", answer: "The cost depends on the complexity, features, and the team's expertise, ranging from thousands to millions of dollars." },
    { question: "What is Custom Software Development and Why is it Important?", answer: "Custom software development involves building software tailored to specific needs, ensuring business efficiency and uniqueness." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-box">
        <h2 className="faq-heading">FAQ</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
