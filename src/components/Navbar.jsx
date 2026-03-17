import React from "react";
import mylogo from "../image/logo1.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="img" src={mylogo} alt="logo" />

        <div className="nav-list">
          <ul className="nav-list-items">
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="conetct">
          <input className="con-email" type="email" placeholder="Email" />
          <button className="btn">Login</button>
        </div>
      </div>

      
    </>
  );
}

export default Navbar;
