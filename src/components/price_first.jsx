// src/Popup.js
import React from "react";

const ConsultPopup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="row">
          <div className="col-lg-4">
            <img className="h-100" src="assets/img/normal/pop.jpg" alt="img" />
          </div>
          <div className="col-lg-8">
            <div className="form-section">
              <h2 className=" text-center sec-title style2">Contact Us</h2>
              <button className="close-button" onClick={onClose}>
                ×
              </button>
              <form>
                <input
                  className="form-field"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="form-field"
                  type="email"
                  placeholder="Your Email"
                />
                <input
                  className="form-field"
                  type="text"
                  placeholder="Subject"
                />
                <textarea
                  className="form-field"
                  rows="4"
                  placeholder="Message"
                ></textarea>
                <button className="w-100 global-btn" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultPopup;
