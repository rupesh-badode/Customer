import React, { useState } from "react";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="contact-form-container">
      <h2><b>How Can We Help You?</b></h2>
      <p>
        Get in touch with us, and we will gladly get back to you as soon as
        possible. If you need a professional team, CleverDev Software will be
        happy to assist you in making your vision a reality.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
      <div className="con">
       <div>
       <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
       </div>
        <div className="sum">
        <div className="form-group message-group">
          <label htmlFor="message">How can we help you? *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
      
        <br/>
        <div className="check ">
        
          <input type="checkbox"/> By submitting this form you agree to our Privacy Policy
         
          <div>
          <label htmlFor="agreement">
          </label>
          </div>
        </div>
        <button type="submit" className="submit-button">
          SUBMIT &rarr;
        </button>
        </div>
       </div>
      </form>
    </div>
  );
};

export default ContactForm;
