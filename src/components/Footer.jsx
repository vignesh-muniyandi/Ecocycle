import React from "react";
import mylogo from "../image/logo1.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAmazon ,FaTwitter } from "react-icons/fa";


import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img src={mylogo} alt="logo" />
          <div className="social">
            <ul className="social-items">
              <li className="social-link">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li className="social-link">
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li className="social-link">
                <a href="#">
                  <FaAmazon />
                </a>
              </li>
              <li className="social-link">
                <a href="#">
                  <FaTwitter />
 
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="services">
          <h3>Company</h3>
          <ul className="service-list">
            <li className="service-item">Cookies</li>
            <li className="service-item">Payments</li>
            <li className="service-item">privacy and policy</li>
            <li className="service-item">Quality warenty </li>
          </ul>
        </div>

        <div className="services1">
          <h3>Service</h3>
          <ul className="service1-list">
            <li className="service1-item">Cookies</li>
            <li className="service1-item">Payments</li>
            <li className="service1-item">privacy and policy</li>
            <li className="service1-item">Quality warenty </li>
          </ul>
        </div>
        <div className="services1">
          <h3>Contect</h3>
          <ul className="service1-list">
            <li className="service1-item">Cookies</li>
            <li className="service1-item">Payments</li>
            <li className="service1-item">privacy and policy</li>
            <li className="service1-item">Quality warenty </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
