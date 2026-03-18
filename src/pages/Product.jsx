import React from 'react'
import "../pages/Product.css";
import cycle from "../image/cool-bicycle-studio.jpg"
import cycle1 from "../image/cycyle1.jpg";
import cycle2 from "../image/43044.jpg";

function Product() {
  return (
    <div className="product">
      <h1 className="head">Our Products</h1>
      <div className="container">
        <div className="product-img">
          <img src={cycle} alt="#" />
        </div>
        <div className="product-contect">
          <h1>Mountain Bike X100</h1>
          <p className="price">₹12,999</p>

          <p>
            Experience smooth and powerful riding with this high-quality
            mountain bike.
          </p>

          <h3>Key Features:</h3>
          <ul>
            <li>21-speed gear system</li>
            <li>Strong steel frame</li>
            <li>Front suspension</li>
            <li>Disc brakes</li>
          </ul>

          <div className="buttonGroup">
            <button className="cartBtn">Add to Cart</button>
            <button className="buyBtn">Buy Now</button>
          </div>

          <div className="contact">
            <h4>Need Help?</h4>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@ecocycle.com</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="product-contect">
          <h1>Mountain Bike X100</h1>
          <p className="price">₹12,999</p>

          <p>
            Experience smooth and powerful riding with this high-quality
            mountain bike.
          </p>

          <h3>Key Features:</h3>
          <ul>
            <li>21-speed gear system</li>
            <li>Strong steel frame</li>
            <li>Front suspension</li>
            <li>Disc brakes</li>
          </ul>

          <div className="buttonGroup">
            <button className="cartBtn">Add to Cart</button>
            <button className="buyBtn">Buy Now</button>
          </div>

          <div className="contact">
            <h4>Need Help?</h4>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@ecocycle.com</p>
          </div>
        </div>
        <div className="product-img">
          <img src={cycle2} alt="#" />
        </div>
      </div>
      <div className="container" >
        <div className="product-img">
          <img src={cycle1} alt="#" />
        </div>
        <div className="product-contect">
          <h1>Mountain Bike X100</h1>
          <p className="price">₹12,999</p>

          <p>
            Experience smooth and powerful riding with this high-quality
            mountain bike.
          </p>

          <h3>Key Features:</h3>
          <ul>
            <li>21-speed gear system</li>
            <li>Strong steel frame</li>
            <li>Front suspension</li>
            <li>Disc brakes</li>
          </ul>

          <div className="buttonGroup">
            <button className="cartBtn">Add to Cart</button>
            <button className="buyBtn">Buy Now</button>
          </div>

          <div className="contact">
            <h4>Need Help?</h4>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@ecocycle.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product
