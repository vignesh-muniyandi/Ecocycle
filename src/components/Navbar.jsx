import React from "react";
import mylogo from "../image/logo1.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="img" src={mylogo} alt="logo" />

        <div className="nav-list">
          <ul className="nav-list-items">
            <li className="nav-item">
              <Link to="/">Home</Link> 
            </li>
            <li className="nav-item">
              <Link to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Product">Products</Link>
            </li>
            <li className="nav-item">
              <a href="#services">Services</a>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contect</Link>
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
