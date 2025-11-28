import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const StripeFormHome = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [b_nature, setb_nature] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      full_name: fullName,
      email: email,
      phone_number: phone,
      b_nature: b_nature,
    };

    emailjs
      .send(
        "service_3bto3oq",
        "template_1165g0a",
        templateParams,
        "oE78u7cUA49vZQsfC"
      )
      .then(
        (response) => {
          setStatus("Thanks for submitting request, We will get back to you!");
          // Reset form fields
          setFullName("");
          setEmail("");
          setPhone("");
          setb_nature("");

          // ✅ Redirect to Stripe after email is sent
          window.location.href = "https://buy.stripe.com/fZe9BGdX1ayd6wUbIO";
        },
        (error) => {
          setStatus("Failed to send email.");
        }
      );
  };

  return (
    <div className="popup-container popup-animation">
      <div className="popup-content another-popup-content">
        <div className="row justify-content-center align-items-center mbl_resp_custom">
          {/* Left Image Section */}
          <div className="w-50 hidden md:block p-0 custom_left_img_div">
            <img
              src="/assets/img/blackfriday/black_friday.jpg"
              alt="black_friday"
              className="custom_left_img"
            />
          </div>

          {/* Right Form Section */}
          <div className="right_form_section md:w-1/2 p-8">
            {/* ❌ Close Button */}
            <div className="closeBtnDiv" style={{ textAlign: "end" }}>
              <button className="close-button" onClick={onClose}>
                ×
              </button>
            </div>
            <p className="custom_title">Business Details</p>
            <form onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <div style={{ marginBottom: "0px" }} className="form-group">
                <label className="label_pop" htmlFor="fName">
                  Full Name
                </label>
                <input
                  id="f_Name"
                  className="form-field custom-input"
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: "0px" }} className="form-group">
                <label className="label_pop" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="form-field custom-input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: "0px" }} className="form-group">
                <label className="label_pop" htmlFor="fName">
                  Phone Number
                </label>
                <input
                  id="number"
                  className="form-field custom-input"
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: "0px" }} className="form-group">
                <label className="label_pop" htmlFor="businessNature">
                  Business Nature:
                </label>
                <input
                  id="fName"
                  className="form-field custom-input"
                  type="text"
                  placeholder="Your Business Nature"
                  value={b_nature}
                  onChange={(e) => setb_nature(e.target.value)}
                  required
                />
              </div>
              <button
                style={{
                  marginLeft: "5px",
                  width: "100%",
                  height: "40px",
                  padding: "0px",
                  fontSize: "14px",
                }}
                className="global-btn"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripeFormHome;
