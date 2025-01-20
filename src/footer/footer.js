import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-column">
          <div className="logo">CLEVERDEV SOFTWARE</div>
          <p>
            At CleverDev Software we create custom solutions for small and mid-sized enterprises,
            and render business automation services, using time-proven technologies and approaches.
          </p>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Custom Web Apps Development</li>
            <li>Cloud App Development</li>
            <li>System Integration Services</li>
            <li>Business Process Automation</li>
            <li>Hybrid App Development</li>
            <li>Healthcare Software Consulting</li>
            <li>Healthcare App Development</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <li>EMR/EHR Software Solutions</li>
            <li>ERP Development Services</li>
            <li>CRM Software Development</li>
            <li>BPM Development Services</li>
            <li>Medical Apps for Patients</li>
            <li>IoT Healthcare Solutions</li>
            <li>Medical Billing Software</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Find Us in the USA</h4>
          <p>
            5900 Balcones Drive STE 100 Austin <br />
            TX 78731 <br />
            +1 214 736 3425
          </p>
          <h4>Find Us in Europe</h4>
          <p>
            Poland <br />
            101 Ostrobramska Str 04-041 Warsaw
          </p>
          <p>contact@cleverdevsoftware.com</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
