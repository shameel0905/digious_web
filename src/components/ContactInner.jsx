import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const ContactInner = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if reCAPTCHA is verified  
    if (!recaptchaValue) {
      setStatus("Please verify you are not a robot.");
      return;
    }

    const templateParams = {
      full_name: fullName,
      email: email,
      subject: subject,
      phone_number: phone,
      message: message,
    };

    emailjs
      .send(
        "service_3bto3oq",
        "template_ytutt87",
        templateParams,
        "oE78u7cUA49vZQsfC"
      )
      .then(
        (response) => {
          setStatus("Email Sent Successfully!");
          // Reset form fields and reCAPTCHA  
          setFullName("");
          setEmail("");
          setSubject("");
          setPhone("");
          setMessage("");
          setRecaptchaValue(null);
        },
        (error) => {
          setStatus("Failed to send email.");
        }
      );
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <>
      <div className="contact-area space">
        <div className="container">
          <div className="contact-page-wrap bg-theme">
            <div className="row gy-40 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Phone</h6>
                    <p className="contact-info_text">
                      <span>
                        <a href="tel:+19133745577">US: (913)374-5577</a>
                      </span> <br />
                      <span>
                        <a href="https://api.whatsapp.com/send?phone=61431066995">
                          Whatsapp: (614)310-66995
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Location</h6>
                    <p className="contact-info_text">
                    <a href="https://www.google.com/maps/place/196+The+Esplanade,+Speers+Point+NSW+2284,+Australia/@-32.964972,151.6205144,17z/data=!3m1!4b1!4m6!3m5!1s0x6b733c89c1d2e117:0x3cb638b351455c9d!8m2!3d-32.9649765!4d151.6230893!16s%2Fg%2F11c1yl934l?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    196 The Esplanade Speers point <br /> New Castle NSW, 2284, Australia
                    </a>
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Email</h6>
                    <p className="contact-info_text">
                      <a href="mailto:info@digioussolutions.com">
                      <span>info@digioussolutions.com</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="row gy-40 justify-content-between">
            <div className="col-lg-4">
              <div className="title-area mb-0">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Contact Us
                </span>
                <h2 className="sec-title style2">Get In Touch</h2>
                <p className="mb-40">
                  Got questions? Let's connect. Explore how our expertise can
                  benefit you.
                </p>
                <div className="social-btn style4">
                  <Link to="https://www.facebook.com/Digious" target="_blank" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/digious-solutions/" target="_blank"
                    tabIndex={-1}
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="https://twitter.com/digioustweets" target="_blank" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/digiousposts/" target="_blank"
                    tabIndex={-1}
                  >
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://github.com/digious-solutions" target="_blank" tabIndex={-1}>
                    <i className="fab fa-github" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <form onSubmit={handleSubmit}>
                <div className="contact-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        style={{ color: "white" }}
                        type="text"
                        placeholder="Your Name"
                        className="form-control style-border"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        style={{ color: "white" }}
                        type="text"
                        placeholder="Your Email"
                        className="form-control style-border"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        style={{ color: "white" }}
                        type="text"
                        placeholder="Subject"
                        className="form-control style-border"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        style={{ color: "white" }}
                        placeholder="Phone Number"
                        className="form-control style-border"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Message here.."
                        style={{ color: "white" }}
                        className="form-control style-border"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="col-12 form-group mb-0">
                      
                    <ReCAPTCHA
                        sitekey="6Lc8QkcqAAAAABu_Lo0zjHmB637lCIWbBg-vQz19"
                        onChange={handleRecaptchaChange}
                      />
                      
                      <button type="submit" className="global-btn w-100">
                        Send Now
                        <img
                          src="assets/img/icon/right-icon.svg"
                          alt="Digious Solutions"
                        />
                      </button>
                      
                      {status && <p className="text-center text-white" style={{ paddingTop: "10px" }}>{status}</p>}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
            <div className="space-bottom">
        <div className="map-sec">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.4710510452423!2d151.62051437643305!3d-32.964971972815626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b733c89c1d2e117%3A0x3cb638b351455c9d!2s196%20The%20Esplanade%2C%20Speers%20Point%20NSW%202284%2C%20Australia!5e0!3m2!1sen!2s!4v1744751296775!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Digious Solutions"
          />
        </div>
      </div>
    </>
  );
};

export default ContactInner;