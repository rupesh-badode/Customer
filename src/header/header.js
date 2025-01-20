import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className= "text-center">
        <div className="container">
            <div className="d-flex flex-wrap navbar navbar-expand-lg" id="header-component">
              <div className="col navbar-brand"><img src="https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/62bab7a84326dc974b62359f_logotype-white-text.svg"></img></div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="d-flex navbar-collapse" id="navbar">
                <div className="nav">
                    <div className="dropdown nav-item">
                        <a className="dropdown-toggle" data-bs-toggle="dropdown">service</a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item ">Custom web app Development</a></li>
                            <li><a className="dropdown-item">CRM Development Services</a></li>
                            <li><a className="dropdown-item ">ERP Development Company</a></li>
                            <li><a className="dropdown-item">API Development Services</a></li>
                            <li><a className="dropdown-item ">BPM Development Services</a></li>
                            <li><a className="dropdown-item">Cloud App Development</a></li>
                        </ul>
                    </div>
                    <div className="dropdown nav-item">
                        <a className="dropdown-toggle " data-bs-toggle="dropdown">Solutions</a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item ">EHR Software Solution</a></li>
                            <li><a className="dropdown-item">Medical Billing Software</a></li>
                            <li><a className="dropdown-item">Healthcare Integration Solutions</a></li>
                            <li><a className="dropdown-item">Medical Imaging Software</a></li>
                            <li><a className="dropdown-item">Medication Management Software</a></li>
                            <li><a className="dropdown-item">Medical Apps for Patients</a></li>
                            <li><a className="dropdown-item"> Custom Telehealth Software</a></li>
                            <li><a className="dropdown-item">IoT Healthcare Solutions</a></li>
                            <li><a className="dropdown-item"></a></li>
                            <li><a className="dropdown-item"></a></li>
                            <li><a className="dropdown-item"></a></li>
                        </ul>
                    </div>
                    <div className=" dropdown  nav-item">
                        <a className=" dropdown-toggle  " data-bs-toggle="dropdown">Technologies</a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item">Java</a></li>
                            <li><a className="dropdown-item">hibernate</a></li>
                            <li><a className="dropdown-item">ReactJS</a></li>
                            <li><a className="dropdown-item">NodeJS</a></li>
                            <li><a className="dropdown-item">Angular</a></li>
                        </ul>
                    </div>
                    <div className=" dropdown  nav-item">
                        <a className=" dropdown-toggle  " data-bs-toggle="dropdown">Industries</a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item ">Healthcare</a></li>
                            <li><a className="dropdown-item">Fintech</a></li>
                            <li><a className="dropdown-item">Insurance</a></li>
                            <li><a className="dropdown-item">Logistics</a></li>
                            <li><a className="dropdown-item ">Manufacturing</a></li>
                            <li><a className="dropdown-item">Construction</a></li>
                            <li><a className="dropdown-item">Real Estate</a></li>
                        </ul>
                    </div>
                    <div className="nav-item"><a href="#">Case Studies</a></div>
                    <div className="nav-item"><a href="#">Pricing</a></div>
                    <div className="dropdown nav-item">
                        <a className="dropdown-toggle  " data-bs-toggle="dropdown">About</a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item ">About Us</a></li>
                            <li><a className="dropdown-item">How We Work</a></li>
                            <li><a className="dropdown-item ">Blog</a></li>
                            <li><a className="dropdown-item">Careers</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-2 nav-item header-right-panel">
                    <a href="#"><span className="bi bi-search me-4"></span></a>
                    <button className="btn btn-outline-warning rounded-5">Contact us</button>
                </div>
               </div>
            </div>
        </div>
    </header>

  );
};

export default Header;
