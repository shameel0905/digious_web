import React, { useState } from "react";
import emailjs from "emailjs-com";

const CTAThree = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: email,
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
          setStatus("Thanks for subscribing our newsletter!");
          setEmail("");
        },
        (error) => {
          setStatus("Failed to send email.");
        }
      );
  };

  return (
    <section className="bg-dark2 pt-1">
      <div className="container">
        <div className="cta-area-3 bg-theme_for">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-5">
              <div className="title-area mb-lg-0 text-lg-start text-center">
                <h2 className="sec-title text-white">
                  Subscribe To Our Newsletter
                </h2>
                <p className="sec-text text-white">
                  Regular updates on latest news and events.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <form onSubmit={handleSubmit} className="newsletter-form style2">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required=""
                  />
                  <button type="submit" className="global-btn">
                    Subscribe Now
                  </button>
                </div>
                {status && <p className="text-center text-white" style={{ paddingTop: "10px" }}>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAThree;
