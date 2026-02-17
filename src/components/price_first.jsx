import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
// import ReCAPTCHA from "react-google-recaptcha";

const ConsultPopup = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const servicesList = [
    "Brand new website",
    "Revamp my website",
    "Website sustomized plugin",
    "Website sustomized theme",
    "Website maintenance services"
  ];

  const budgetList = [
    "<5K", "5-10K", "10-20K", ">20K", "Not Sure"
  ];

  const handleServiceChange = (service) => {
    setSelectedServices(prev => 
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: "" }));
    }
  };

  const handleBudgetChange = (budget) => {
    setSelectedBudget(budget);
    if (errors.budget) {
      setErrors(prev => ({ ...prev, budget: "" }));
    }
  };

  const handleInputChange = (setter, field, value) => {
    setter(value);
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (selectedServices.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    if (!selectedBudget) {
      newErrors.budget = "Please select a budget range";
    }

    if (message.trim() && message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters if provided";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const templateParams = {
      full_name: fullName,
      email: email,
      phone_number: phone,
      industry: selectedServices.join(", "),
      budget: selectedBudget,
      project_description: message,
    };

    emailjs
      .send(
        "service_i3wnffw",
        "template_mxzh1eg",
        templateParams,
        "fDcemrov779Sryl9x"
      )
      .then(
        (response) => {
          setStatus("Success! Your consultation request has been sent.");
          setFullName("");
          setEmail("");
          setPhone("");
          setSelectedServices([]);
          setSelectedBudget("");
          setMessage("");
          setRecaptchaValue("");
          setErrors({});
        },
        (error) => {
          setStatus("Failed to send email. Please try again.");
        }
      );
  };

  useEffect(() => {
    const popupContainer = document.querySelector(".popup-container");
    if (popupContainer) {
      popupContainer.classList.add("popup-animation");
    }
  }, []);

  // Check if mobile (screen width < 768px)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Responsive styles
  const responsiveStyles = {
    popupContainer: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      display: "flex",
      justifyContent: "center",
      alignItems: isMobile ? "flex-start" : "center",
      zIndex: 9999,
      padding: isMobile ? "0" : "20px",
      overflowY: "auto",
    },
    popupContent: {
      maxWidth: "900px",
      width: isMobile ? "100%" : "95%",
      margin: isMobile ? "0" : "20px auto",
      borderRadius: isMobile ? "0" : "24px",
      backgroundColor: "rgba(18, 18, 18, 0.98)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
      position: "relative",
    },
    formContainer: {
      padding: isMobile ? "20px 15px 30px" : "25px",
    },
    title: {
      fontSize: isMobile ? "1.3rem" : "1.5rem",
      marginTop: "10px",
      color: "white",
      marginBottom: "20px",
      fontWeight: "600",
    },
    sectionTitle: {
      fontSize: isMobile ? "1.1rem" : "1.2rem",
      color: "white",
      marginBottom: "15px",
      marginTop: isMobile ? "15px" : "20px",
      fontWeight: "500",
    },
    inputField: {
      borderRadius: "12px",
      color: "white",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      padding: isMobile ? "12px 15px" : "12px 16px",
      fontSize: isMobile ? "15px" : "16px",
      width: "100%",
    },
    serviceLabel: {
      padding: isMobile ? "12px 12px" : "10px 16px",
      borderRadius: "12px",
      fontSize: isMobile ? "14px" : "14px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      cursor: "pointer",
      color: "white",
      transition: "all 0.3s ease",
      backgroundColor: "transparent",
    },
    budgetLabel: {
      padding: isMobile ? "12px 12px" : "10px 16px",
      borderRadius: "12px",
      fontSize: isMobile ? "14px" : "14px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      cursor: "pointer",
      color: "white",
      transition: "all 0.3s ease",
      backgroundColor: "transparent",
    },
    submitButton: {
      width: "100%",
      marginTop: "25px",
      marginBottom: "10px",
      borderRadius: "12px",
      fontWeight: "600",
      backgroundColor: "#2976c0",
      borderColor: "#2976c0",
      color: "white",
      padding: isMobile ? "14px 20px" : "12px 30px",
      fontSize: isMobile ? "16px" : "16px",
    },
    closeButton: {
      position: "absolute",
      top: isMobile ? "15px" : "20px",
      right: isMobile ? "15px" : "20px",
      background: "rgba(255, 255, 255, 0.2)",
      border: "none",
      color: "white",
      fontSize: isMobile ? "24px" : "28px",
      cursor: "pointer",
      width: isMobile ? "40px" : "44px",
      height: isMobile ? "40px" : "44px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      transition: "background-color 0.3s ease",
      lineHeight: "1",
      padding: 0,
    }
  };

  return (
    <>
      <div className="popup-container" style={responsiveStyles.popupContainer}>
        <div className="popup-content" style={responsiveStyles.popupContent}>
          {/* Close Button - Fixed to top right */}
          <button 
            className="close-button" 
            onClick={onClose}
            style={responsiveStyles.closeButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            }}
          >
            ×
          </button>
          
          <div className="row justify-content-center align-items-start" style={{ margin: 0 }}>
            <div className="col-lg" style={{ padding: 0 }}>
              <div className="form-section" style={responsiveStyles.formContainer}>
                
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row" style={{ marginBottom: 0, padding: 0 }}>
                    
                    {/* CONTACT INFO TITLE */}
                    <div className="col-12">
                      <div className="font-futura" style={responsiveStyles.title}>
                        Contact Info <span style={{ color: "#2976c0" }}>*</span>
                      </div>
                    </div>

                    {/* CONTACT FIELDS - 2 COLUMNS ON MOBILE, 3 COLUMNS ON DESKTOP */}
                    <div className={isMobile ? "col-6" : "col-md-4"} style={{ 
                      marginBottom: "15px",
                      paddingRight: isMobile ? "5px" : "10px",
                    }}>
                      <input
                        type="text"
                        placeholder="Name *"
                        required
                        className="form-control"
                        style={{
                          ...responsiveStyles.inputField,
                          borderColor: errors.fullName ? "#ff6b6b" : "",
                        }}
                        value={fullName}
                        onChange={(e) => handleInputChange(setFullName, "fullName", e.target.value)}
                      />
                      {errors.fullName && (
                        <small style={{ color: "#ff6b6b", marginTop: "5px", display: "block", fontSize: "11px" }}>
                          {errors.fullName}
                        </small>
                      )}
                    </div>

                    <div className={isMobile ? "col-6" : "col-md-4"} style={{ 
                      marginBottom: "15px",
                      paddingLeft: isMobile ? "5px" : "10px",
                      paddingRight: isMobile ? "0" : "10px",
                    }}>
                      <input
                        type="text"
                        placeholder="Phone Number *"
                        required
                        className="form-control"
                        style={{
                          ...responsiveStyles.inputField,
                          borderColor: errors.phone ? "#ff6b6b" : "",
                        }}
                        value={phone}
                        onChange={(e) => handleInputChange(setPhone, "phone", e.target.value)}
                      />
                      {errors.phone && (
                        <small style={{ color: "#ff6b6b", marginTop: "5px", display: "block", fontSize: "11px" }}>
                          {errors.phone}
                        </small>
                      )}
                    </div>

                    <div className={isMobile ? "col-6" : "col-md-4"} style={{ 
                      marginBottom: "15px",
                      paddingRight: isMobile ? "5px" : "10px",
                    }}>
                      <input
                        type="email"
                        placeholder="Email *"
                        required
                        className="form-control"
                        style={{
                          ...responsiveStyles.inputField,
                          borderColor: errors.email ? "#ff6b6b" : "",
                        }}
                        value={email}
                        onChange={(e) => handleInputChange(setEmail, "email", e.target.value)}
                      />
                      {errors.email && (
                        <small style={{ color: "#ff6b6b", marginTop: "5px", display: "block", fontSize: "11px" }}>
                          {errors.email}
                        </small>
                      )}
                    </div>

                    {/* Empty div for desktop layout to maintain 3-column grid */}
                    {!isMobile && <div className="col-md-4" style={{ marginBottom: "15px" }}></div>}

                    {/* INTEREST TITLE */}
                    <div className="col-12">
                      <div className="font-futura" style={responsiveStyles.sectionTitle}>
                        You Are Interested In <span style={{ color: "#2976c0" }}>*</span>
                      </div>
                    </div>

                    {/* SERVICES CHECKBOXES - 2 COLUMNS ON MOBILE, 3 COLUMNS ON DESKTOP */}
                    <div className="col-12" style={{ padding: 0 }}>
                      <div className="row" style={{ margin: 0 }}>
                        {servicesList.map((service, index) => (
                          <div 
                            className={isMobile ? "col-6" : "col-md-4"} 
                            style={{ 
                              padding: isMobile ? "3px" : "5px",
                              marginBottom: "5px"
                            }} 
                            key={index}
                          >
                            <label
                              className="custom-checkbox"
                              style={{
                                ...responsiveStyles.serviceLabel,
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
                              }}
                            >
                              <input
                                type="checkbox"
                                className="d-none"
                                checked={selectedServices.includes(service)}
                                onChange={() => handleServiceChange(service)}
                              />
                              <span style={{ marginRight: "8px", fontSize: isMobile ? "16px" : "16px" }}>
                                {selectedServices.includes(service) ? "✓" : "○"}
                              </span>
                              <span style={{ fontSize: isMobile ? "13px" : "14px" }}>{service}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.services && (
                        <small style={{ color: "#ff6b6b", marginTop: "10px", display: "block", fontSize: "12px", paddingLeft: "5px" }}>
                          {errors.services}
                        </small>
                      )}
                    </div>

                    {/* BUDGET TITLE */}
                    <div className="col-12">
                      <div className="font-futura" style={responsiveStyles.sectionTitle}>
                        Your Budget <span style={{ color: "#2976c0" }}>*</span>
                      </div>
                    </div>

                    {/* BUDGET RADIO BUTTONS - 2 COLUMNS ON MOBILE, 3 COLUMNS ON DESKTOP */}
                    <div className="col-12" style={{ padding: 0 }}>
                      <div className="row" style={{ margin: 0 }}>
                        {budgetList.map((budget, index) => (
                          <div 
                            className={isMobile ? "col-6" : "col-md-3"} 
                            style={{ 
                              padding: isMobile ? "3px" : "5px",
                              marginBottom: "5px"
                            }} 
                            key={index}
                          >
                            <label
                              style={{
                                ...responsiveStyles.budgetLabel,
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
                              }}
                            >
                              <input
                                type="radio"
                                name="budget"
                                className="d-none"
                                checked={selectedBudget === budget}
                                onChange={() => handleBudgetChange(budget)}
                              />
                              <span style={{ marginRight: "8px", fontSize: isMobile ? "16px" : "16px" }}>
                                {selectedBudget === budget ? "●" : "○"}
                              </span>
                              <span style={{ fontSize: isMobile ? "13px" : "14px" }}>{budget}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.budget && (
                        <small style={{ color: "#ff6b6b", marginTop: "10px", display: "block", fontSize: "12px", paddingLeft: "5px" }}>
                          {errors.budget}
                        </small>
                      )}
                    </div>

                    {/* MESSAGE - FULL WIDTH */}
                    <div className="col-12 form-group" style={{ 
                      marginTop: isMobile ? "20px" : "25px",
                      padding: 0
                    }}>
                      <textarea
                        placeholder="Tell us about your project... (Minimum 10 characters if provided)"
                        className="form-control"
                        style={{
                          ...responsiveStyles.inputField,
                          minHeight: isMobile ? "100px" : "120px",
                          borderColor: errors.message ? "#ff6b6b" : "",
                          resize: "vertical",
                        }}
                        value={message}
                        onChange={(e) => handleInputChange(setMessage, "message", e.target.value)}
                      />
                      {errors.message && (
                        <small style={{ color: "#ff6b6b", marginTop: "5px", display: "block", fontSize: "12px" }}>
                          {errors.message}
                        </small>
                      )}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="col-12 text-center" style={{ padding: 0 }}>
                      <button
                        type="submit"
                        className="btn btn-light btn-lg"
                        style={responsiveStyles.submitButton}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#1a5a9e";
                          e.target.style.borderColor = "#1a5a9e";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "#2976c0";
                          e.target.style.borderColor = "#2976c0";
                        }}
                      >
                        Submit
                      </button>
                    </div>

                    {/* STATUS MESSAGE */}
                    {status && (
                      <div className="col-12 text-center" style={{ padding: 0 }}>
                        <p style={{ 
                          color: status.includes("Success") ? "#4CAF50" : "#ff6b6b",
                          marginTop: "10px",
                          fontWeight: "500",
                          padding: isMobile ? "12px" : "10px",
                          borderRadius: "12px",
                          fontSize: isMobile ? "14px" : "14px",
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
                
                <svg
                  className="svgpform"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "absolute",
                    bottom: isMobile ? "10px" : 0,
                    right: isMobile ? "10px" : 0,
                    width: isMobile ? "80px" : "150px",
                    height: isMobile ? "80px" : "150px",
                    opacity: 0.15,
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                >
                  <path
                    fill="#4073ff"
                    d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z"
                    transform="translate(100 100)"
                    className="path"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultPopup;