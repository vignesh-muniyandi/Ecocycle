import React from 'react'
import '../pages/About.css'
import cycle from "../image/cycle.png";
 
function About() {
  return (
    <>
      <div className="about">
        <div className="our">
          <h1> Who We Are</h1>
          <p>
            We are passionate about cycling and committed to providing the best
            bicycles for every rider. Our team focuses on quality, innovation,
            and customer satisfaction.
          </p>
        </div>
        <div className="our1">
          <h1> Who We Are</h1>
          <p>
            We are passionate about cycling and committed to providing the best
            bicycles for every rider. Our team focuses on quality, innovation,
            and customer satisfaction.
          </p>
        </div>
        <div className="our2">
          <div className="our-card1">
            <h1>Why Choose Us</h1>
            <ul className="our2-list">
              <li className="list-items">High-quality products</li>
              <li className="list-items">Affordable prices</li>
              <li className="list-items">Modern designs</li>
              <li className="list-items">Excellent customer support</li>
            </ul>
          </div>
          <div className="our-card2">
            <img src={cycle}  alt="#" /> 
          </div>
        </div>
      </div>
    </>
  );
}

export default About
