import React from 'react'
import '../pages/Contect.css';

function Contact() {
  return (
    <>
      <div className="contect">
        <div className="contect-body">
          <div className="inner-body">
            <h3> Contact Us</h3>
            <p>
              
              We’d love to hear from you! Whether you have questions about our
              bicycles, need help choosing the right model, or want to know more
              about our services, feel free to reach out.
            </p>
          </div>
          <div className="inner-body1">
            <h3> Our Address</h3>

            <p>
              EcoCycle Store 123 Green Street,
              <br /> Chennai,
              <br /> Tamil Nadu, India
            </p>
            <h5>support@ecocycle.com</h5>
            <h5>+91 98765 43210</h5>
          </div>
        </div>
        <div className="contect-body2">
          <h1>Contect Us</h1>

          <form action="#">
            <label htmlFor="name">name</label>
            <input type="text" placeholder="Enter the name " /> <br />
            <label htmlFor="email"> Email</label>
            <input type="email" placeholder="Enter your Email" /><br />
            <label htmlFor="number">Number</label>
            <input type="number" placeholder="Enter your nUmber" /><br />

            <button className="btn"> Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact
