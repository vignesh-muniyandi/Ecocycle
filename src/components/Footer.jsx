import React from "react";
import mylogo from "../image/logo1.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img src={mylogo} alt="logo" />
          <div className="social">
            <ul>
              <li className="social-link">
                <a href="#"></a>
              </li>
              <li className="social-link">
                <a href="#"></a>
              </li>
              <li className="social-link">
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
