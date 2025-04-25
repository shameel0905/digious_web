import React from "react";

const StripeFormHome = ({ onClose }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Proceeding to Stripe Checkout...");
//     // Add Stripe logic here
//   };

  return (
    <div className="popup-container popup-animation">
      <div className="popup-content another-popup-content">
        <div className="row justify-content-center align-items-center mbl_resp_custom">
          {/* Left Image Section */}
          <div className="w-50 hidden md:block p-0 custom_left_img_div">
            <img
              src="/assets/img/icon/Digious_Web_post.jpg"
              alt="Business"
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
            <form action="https://buy.stripe.com/fZe9BGdX1ayd6wUbIO" className="space-y-4">
              <div style={{ marginBottom: "0px" }} className="form-group">
                <label className="label_pop" htmlFor="fName">
                  Enter Your Full Name
                </label>
                <input
                  id="fName"
                  className="form-field custom-input"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div style={{ marginBottom: "0px" }} className="form-group">
                <label className="label_pop" htmlFor="fName">
                  Enter Your Phone Number
                </label>
                <input
                  id="number"
                  className="form-field custom-input"
                  type="text"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div style={{ marginBottom: "0px" }} className="form-group">
                <label className="label_pop" htmlFor="email">
                  Enter Your Email
                </label>
                <input
                  id="email"
                  className="form-field custom-input"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div style={{ marginBottom: "0px" }} className="form-group">
                <label className="label_pop" htmlFor="businessNature">
                  Your Business Nature:
                </label>
                <input
                  id="fName"
                  className="form-field custom-input"
                  type="text"
                  placeholder="Your Business Nature"
                  required
                />
              </div>
              <button
                style={{ marginLeft: "5px", width: "100%", height: "40px", padding: "0px", fontSize: "14px" }}
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
