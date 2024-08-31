import React, { useState } from "react";
import emailjs from "emailjs-com";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: email,
    };

    emailjs
      .send(
        "service_i3wnffw",
        "template_wohcj3b",
        templateParams,
        "fDcemrov779Sryl9x"
      )
      .then(
        (response) => {
          setStatus("Thanks for subscribing our newsletter!");
          setEmail("");
        },
        (error) => {
          setStatus("Failed to send email.");
        }
      );
  };

  return (
    <div className="container">
      <div className="footer-top-1 bg-theme">
        <div className="footer-top-content">
          <h3 className="footer-top-title text-white">Newsletter</h3>
          <p className="footer-top-text">
            Regular updates on latest news and events.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="global-btn">
              Subscribe
              <span className="icon">
                <i className="fa-sharp fas fa-paper-plane ms-2" />
              </span>
            </button>
          </div>
        {status && <p className="text-center text-white" style={{ paddingTop: "10px" }}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
