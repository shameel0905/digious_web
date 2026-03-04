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
  
  // Validation errors state
  const [errors, setErrors] = useState({});
  
  // New state for checkboxes
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");

  const servicesList = [
    "Graphic Design",
    "Website Development",
    "E-Commerce Solution",
    "Game Development",
    "Mobile App Development",
    "Software Development",
    "Digital Marketing",
    "Other",
  ];
  

  const budgetList = ["<5K", "5-10K", "10-20K", ">20K", "Not Sure"];

  const handleServiceChange = (service) => {
    setSelectedServices(prev => {
      const newServices = prev.includes(service)
        ? prev.filter(item => item !== service)
        : [...prev, service];
      
      // Clear service error if at least one is selected
      if (newServices.length > 0) {
        setErrors(prev => ({ ...prev, services: null }));
      }
      
      return newServices;
    });
  };

  const handleBudgetChange = (budget) => {
    setSelectedBudget(budget);
    // Clear budget error
    setErrors(prev => ({ ...prev, budget: null }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate full name
    if (!fullName.trim()) {
      newErrors.fullName = "Name is required";
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate services (at least one selected)
    if (selectedServices.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    // Validate budget (must be selected)
    if (!selectedBudget) {
      newErrors.budget = "Please select your budget range";
    }

    // Validate message (optional but recommended)
    if (message.trim() && message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters if provided";
    }

    // Validate recaptcha
    if (!recaptchaValue) {
      newErrors.recaptcha = "Please verify you are not a robot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setStatus("Please fix the errors below.");
      return;
    }

    const templateParams = {
      full_name: fullName.trim(),
      email: email.trim(),
      subject: subject.trim() || "New Contact Form Submission",
      phone_number: phone.trim() || "Not provided",
      message: message.trim() || "No message provided",
      services: selectedServices.join(", "),
      budget: selectedBudget,
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
          setSelectedServices([]);
          setSelectedBudget("");
          setRecaptchaValue(null);
          setErrors({});
          
          // Clear status after 5 seconds
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus("Failed to send email. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    if (value) {
      setErrors(prev => ({ ...prev, recaptcha: null }));
    }
  };

  // Clear field error on input
  const handleInputChange = (setter, field, value) => {
    setter(value);
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
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
                    <a href="https://maps.app.goo.gl/ZiVvNX54Y7YgnSH56" target="_blank" rel="noopener noreferrer">
                    2/66 Marmong Street <br /> Marmong point 2284 , Australia
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
            <div className="col-xl-7 col-lg-8">
              <form
                onSubmit={handleSubmit}
                className="card-panel transparent backdrop-blur"
                noValidate
              >
                <div className="row" style={{ marginBottom: 0, padding : "20px", borderRadius: "16px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>

                  {/* CONTACT INFO TITLE */}
                  <div className="col-12">
                    <div
                      className="font-futura"
                      style={{ fontSize: "1.5rem", marginTop: "10px", color: "white",marginBottom: "10px"  }}
                    >
                      Contact Info <span style={{ color: "#2976c0" }}>*</span>
                    </div>
                  </div>

                  {/* NAME */}
                  <div className="col-md-4 form-group">
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      className="form-control"
                      style={{ 
                        borderRadius: "16px", 
                        color: "white",
                        borderColor: errors.fullName ? "#ff6b6b" : "",
                      }}
                      value={fullName}
                      onChange={(e) => handleInputChange(setFullName, "fullName", e.target.value)}
                    />
                    {errors.fullName && (
                      <small style={{ color: "#ff6b6b", marginTop: "5px", display: "block" }}>
                        {errors.fullName}
                      </small>
                    )}
                  </div>

                  {/* PHONE */}
                  <div className="col-md-4 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number *"
                      required
                      className="form-control"
                      style={{ borderRadius: "16px", color: "white" }}
                      value={phone}
                      onChange={(e) => handleInputChange(setPhone, "phone", e.target.value)}
                    />
                    {errors.phone && (
                      <small style={{ color: "#ff6b6b", marginTop: "5px", display: "block" }}>
                        {errors.phone}
                      </small>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div className="col-md-4 form-group">
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      className="form-control"
                      style={{ 
                        borderRadius: "16px", 
                        color: "white",
                        borderColor: errors.email ? "#ff6b6b" : "",
                      }}
                      value={email}
                      onChange={(e) => handleInputChange(setEmail, "email", e.target.value)}
                    />
                    {errors.email && (
                      <small style={{ color: "#ff6b6b", marginTop: "5px", display: "block" }}>
                        {errors.email}
                      </small>
                    )}
                  </div>

                  {/* INTEREST TITLE */}
                  <div className="col-12">
                    <div
                      className="font-futura"
                      style={{ fontSize: "1.5rem", marginTop: "15px", color: "white", marginBottom: "15px" }}
                    >
                      You Are Interested In <span style={{ color: "#2976c0" }}>*</span>
                    </div>
                  </div>

                  {/* SERVICES CHECKBOXES */}
                  <div className="col-12">
                    <div className="d-flex flex-wrap gap-2">
                      {servicesList.map((service, index) => (
                        <label
                          key={index}
                          className="custom-checkbox"
                          style={{
                            padding: "10px 16px",
                            borderRadius: "30px",
                            border: `1px solid ${
                              selectedServices.includes(service) 
                                ? "#2976c0" 
                                : errors.services 
                                  ? "#ff6b6b" 
                                  : "rgba(255,255,255,0.3)"
                            }`,
                            backgroundColor: selectedServices.includes(service) 
                              ? "rgba(41, 118, 192, 0.2)" 
                              : "transparent",
                            cursor: "pointer",
                            color: "white",
                            margin: "5px",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <input
                            type="checkbox"
                            className="d-none"
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceChange(service)}
                          />
                          {service}
                        </label>
                      ))}
                    </div>
                    {errors.services && (
                      <small style={{ color: "#ff6b6b", marginTop: "10px", display: "block" }}>
                        {errors.services}
                      </small>
                    )}
                  </div>

                  {/* BUDGET TITLE */}
                  <div className="col-12">
                    <div
                      className="font-futura"
                      style={{ fontSize: "1.5rem", marginTop: "15px", color: "white", marginBottom: "15px" }}
                    >
                      Your Budget <span style={{ color: "#2976c0" }}>*</span>
                    </div>
                  </div>

                  {/* BUDGET RADIO BUTTONS */}
                  <div className="col-12">
                    <div className="d-flex flex-wrap gap-2">
                      {budgetList.map((budget, index) => (
                        <label
                          key={index}
                          style={{
                            padding: "10px 16px",
                            borderRadius: "30px",
                            border: `1px solid ${
                              selectedBudget === budget 
                                ? "#2976c0" 
                                : errors.budget 
                                  ? "#ff6b6b" 
                                  : "rgba(255,255,255,0.3)"
                            }`,
                            backgroundColor: selectedBudget === budget 
                              ? "rgba(41, 118, 192, 0.2)" 
                              : "transparent",
                            cursor: "pointer",
                            color: "white",
                            margin: "5px",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <input
                            type="radio"
                            name="budget"
                            className="d-none"
                            checked={selectedBudget === budget}
                            onChange={() => handleBudgetChange(budget)}
                          />
                          {budget}
                        </label>
                      ))}
                    </div>
                    {errors.budget && (
                      <small style={{ color: "#ff6b6b", marginTop: "10px", display: "block" }}>
                        {errors.budget}
                      </small>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div className="col-12 form-group mt-4">
                    <textarea
                      placeholder="Tell us about your project... (Minimum 10 characters if provided)"
                      className="form-control"
                      style={{
                        borderRadius: "16px",
                        color: "white",
                        minHeight: "120px",
                        borderColor: errors.message ? "#ff6b6b" : "",
                      }}
                      value={message}
                      onChange={(e) => handleInputChange(setMessage, "message", e.target.value)}
                    />
                    {errors.message && (
                      <small style={{ color: "#ff6b6b", marginTop: "5px", display: "block" }}>
                        {errors.message}
                      </small>
                    )}
                  </div>

                  {/* RECAPTCHA */}
                  <div className="col-12 mt-3">
                    <ReCAPTCHA
                      sitekey="6Lc8QkcqAAAAABu_Lo0zjHmB637lCIWbBg-vQz19"
                      onChange={handleRecaptchaChange}
                    />
                    {errors.recaptcha && (
                      <small style={{ color: "#ff6b6b", marginTop: "5px", display: "block" }}>
                        {errors.recaptcha}
                      </small>
                    )}
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-light btn-lg"
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        marginBottom: "10px",
                        borderRadius: "16px",
                        fontWeight: "600",
                        backgroundColor: "#2976c0",
                        borderColor: "#2976c0",
                        color: "white",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#1a5a9e";
                        e.target.style.borderColor = "#1a5a9e";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#2976c0";
                        e.target.style.borderColor = "#2976c0";
                      }}
                    >
                      Sumbit
                    </button>
                  </div>

                  {/* STATUS MESSAGE */}
                  {status && (
                    <div className="col-12 text-center">
                      <p style={{ 
                        color: status.includes("Success") ? "#4CAF50" : "#ff6b6b",
                        marginTop: "10px",
                        fontWeight: "500",
                        padding: "10px",
                        borderRadius: "8px",
                        backgroundColor: status.includes("Success") 
                          ? "rgba(76, 175, 80, 0.1)" 
                          : "rgba(255, 107, 107, 0.1)",
                      }}>
                        {status}
                      </p>
                    </div>
                  )}
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