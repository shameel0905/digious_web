import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const BlackFridayPopup = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [status, setStatus] = useState("");

  const showAlert = (message) => {
    alert(message);
  };

  const validateForm = () => {
    if (!fullName.trim()) {
      showAlert("Please enter your full name.");
      return false;
    }
    if (!email.trim()) {
      showAlert("Please enter your email address.");
      return false;
    }
    if (!phone.trim()) {
      showAlert("Please enter your phone number.");
      return false;
    }
    if (!industry) {
      showAlert("Please select your business industry.");
      return false;
    }
    if (!budget.trim()) {
      showAlert("Please enter your budget range.");
      return false;
    }
    if (!description.trim()) {
      showAlert("Please describe your project.");
      return false;
    }
    if (!agreeToTerms) {
      showAlert("Please agree to the terms and conditions to proceed.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const templateParams = {
      full_name: fullName,
      email: email,
      phone_number: phone,
      industry: industry,
      budget: budget,
      project_description: description,
      agreed_to_terms: agreeToTerms ? "Yes" : "No",
    };

    emailjs
      .send(
        "service_i3wnffw",
        "template_mxzh1eg",
        templateParams,
        "fDcemrov779Sryl9x"
      )
      .then(
        () => {
          setStatus("Success! Your message has been sent.");
          showAlert("Thank you! Your information has been submitted successfully.");

          setFullName("");
          setEmail("");
          setPhone("");
          setIndustry("");
          setBudget("");
          setDescription("");
          setAgreeToTerms(false);

          window.location.href =
            "https://buy.stripe.com/7sY14ocUr3iUgKB1Pxak009";
        },
        () => {
          setStatus("Failed to send email.");
          showAlert("Sorry, there was an error submitting your form. Please try again.");
        }
      );
  };

  useEffect(() => {
    const popupContainer = document.querySelector(".popup-container");
    popupContainer.classList.add("popup-animation");
  }, []);

  return (
    <>
      <div className="popup-container">
        <div className="popup-content">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-12">
              <div className="form-section">
                <div
                  style={{
                    textAlign: "end",
                    position: "sticky",
                    top: "0",
                    zIndex: "10",
                    padding: "5px 0",
                    marginBottom: "10px",
                  }}
                >
                  <button className="close-button" onClick={onClose}>
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ padding: "0 10px" }}>
                    <h2 className="text-center pop_font_head">
                      Black Friday Special Offer!
                    </h2>

                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div style={{ marginBottom: "15px" }} className="form-group">
                          <label className="label_pop" htmlFor="fName">
                            Enter Your Full Name *
                          </label>
                          <input
                            id="fName"
                            className="form-field"
                            type="text"
                            placeholder="Full Name"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div style={{ marginBottom: "15px" }} className="form-group">
                          <label className="label_pop" htmlFor="email">
                            Enter Your Email *
                          </label>
                          <input
                            id="email"
                            className="form-field"
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div style={{ marginBottom: "15px" }} className="form-group">
                          <label className="label_pop" htmlFor="pNumber">
                            Enter Your Phone Number *
                          </label>
                          <input
                            id="pNumber"
                            className="form-field"
                            type="text"
                            placeholder="Phone Number"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div style={{ marginBottom: "15px" }} className="form-group">
                          <label className="label_pop" htmlFor="budgetRange">
                            Nature Of Business *
                          </label>
                          <input
                            id="budgetRange"
                            type="text"
                            className="form-control form-field"
                            placeholder="Nature Of Business"
                            required
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div style={{ marginBottom: "15px" }} className="form-group">
                          <label className="label_pop" htmlFor="businessIndustry">
                            Additional Services (If Any)
                          </label>
                          <select
                            id="businessIndustry"
                            className="form-control form-field"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                          >
                            <option value="">Select your services</option>
                            <option value="Logo Design">Logo Design</option>
                            <option value="Social Media Marketing">
                              Social Media Marketing
                            </option>
                            <option value="Video Editing">Video Editing</option>
                            <option value="Book Illustration">Book Illustration</option>
                            <option value="Book Editing/formatting/publishing">
                              Book Editing/formatting/publishing
                            </option>
                            <option value="Search Engine Optimization">
                              Search Engine Optimization
                            </option>
                            <option value="Animations">Animations</option>
                            <option value="Software Development">
                              Software Development
                            </option>
                            <option value="Mobile Application Development">
                              Mobile Application Development
                            </option>
                            <option value="Business Development Consultation">
                              Business Development Consultation
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div style={{ marginBottom: "15px" }} className="form-group">
                          <label className="label_pop" htmlFor="projectDesc">
                            Project Description *
                          </label>
                          <textarea
                            id="projectDesc"
                            className="form-field"
                            rows="3"
                            placeholder="Describe your project"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div style={{ marginBottom: "20px" }} className="form-group">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="agreeTerms"
                              required
                              checked={agreeToTerms}
                              onChange={(e) => setAgreeToTerms(e.target.checked)}
                            />
                            <label
                              className="form-check-label label_pop"
                              htmlFor="agreeTerms"
                            >
                              I agree to the{" "}
                              <a href="https://www.digioussolutions.com/privacy-policy">
                                Privacy Policy
                              </a>{" "}
                              and{" "}
                              <a href="https://www.digioussolutions.com/terms-conditions">
                                Terms & Conditions
                              </a>{" "}
                              *
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <button
                          className="w-100 global-btn"
                          type="submit"
                          style={{ marginBottom: "15px" }}
                        >
                          Submit
                        </button>

                        {status && (
                          <p
                            style={{
                              paddingTop: "10px",
                              textAlign: "center",
                              marginBottom: "15px",
                            }}
                          >
                            {status}
                          </p>
                        )}
                      </div>
                    </div>

                    <svg
                      className="svgpform"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginBottom: "10px" }}
                    >
                      <path
                        fill="#4073ff"
                        d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z"
                        transform="translate(100 100)"
                        className="path"
                      ></path>
                    </svg>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .popup-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .popup-content {
          background: rgba(0, 67, 139, 0.29);
          border-radius: 15px;
          width: 90%;
          max-width: 600px;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .popup-content::-webkit-scrollbar {
          width: 6px;
        }

        .popup-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .popup-content::-webkit-scrollbar-thumb {
          background: #4073ff;
          border-radius: 10px;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #fafafaff;
          padding: 5px 15px;
          transition: color 0.3s ease;
        }

        .close-button:hover {
          color: #4073ff;
        }

        .form-section {
          padding: 20px;
        }

        .pop_font_head {
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 10px;
        }

        .label_pop {
          font-weight: 600;
          color: #f5f5f5;
          margin-bottom: 8px;
          display: block;
        }

        .form-field {
          color: #fff;
          font-size: 16px;
          width: 100%;
          background: rgba(68, 68, 68, 0);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          padding: 10px;
        }

        /* MAKE ALL PLACEHOLDERS WHITE */
        .form-field::placeholder,
        textarea.form-field::placeholder,
        input.form-field::placeholder {
          color: #ffffff !important;
          opacity: 1;
        }

        .form-field:focus {
          outline: none;
          border-color: #4073ff;
          box-shadow: 0 0 0 3px rgba(64, 115, 255, 0.1);
        }

        .global-btn {
          background: #4073ff;
          color: white;
          border: none;
          padding: 15px 20px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .global-btn:hover {
          background: #3058cc;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(64, 115, 255, 0.3);
        }

        .svgpform {
          width: 100%;
          height: 80px;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .popup-content {
            max-height: 85vh;
            height: 85vh;
            margin: 7.5vh auto;
            width: 95%;
          }

          .pop_font_head {
            font-size: 1.5rem;
          }

          .global-btn {
            padding: 12px 15px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default BlackFridayPopup;
