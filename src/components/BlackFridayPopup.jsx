import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const BlackFridayPopup = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    // Validate step 1 fields before proceeding
    if (!fullName || !email || !phone) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const progressPercentage = (step / 2) * 100;

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

  const validateStep1 = () => {
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
    return true;
  };

  const validateStep2 = () => {
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

    // Validate all fields
    if (!validateStep2()) {
      return;
    }

    const templateParams = {
      full_name: fullName,
      email: email,
      phone_number: phone,
      industry: industry,
      budget: budget,
      project_description: description,
      agreed_to_terms: agreeToTerms ? "Yes" : "No"
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
          setStatus("Success! Your message has been sent.");
          showAlert("Thank you! Your information has been submitted successfully.");
          // Reset form fields
          setFullName("");
          setEmail("");
          setPhone("");
          setIndustry("");
          setBudget("");
          setDescription("");
          setAgreeToTerms(false);
        },
        (error) => {
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
          <div className="row justify-content-center align-items-center">
            <div className="col-lg">
              <div className="form-section">
                <div style={{ textAlign: "end" }}>
                  <button className="close-button" onClick={onClose}>
                    ×
                  </button>
                </div>
                {/* Progress Bar */}
                <div className="mb-4 progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <form onSubmit={handleSubmit}>
                  {step === 1 ? (
                    <div>
                      <h2 className="text-center pop_font_head">
                        Black Friday Special Offer!
                      </h2>
                      <p className="pop_sub_head">Fill this form below</p>

                      <div
                        style={{ marginBottom: "0px" }}
                        className="form-group"
                      >
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
                      <div
                        style={{ marginBottom: "0px" }}
                        className="form-group"
                      >
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
                      <div
                        style={{ marginBottom: "0px" }}
                        className="form-group"
                      >
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

                      <button
                        className="w-100 global-btn"
                        type="button"
                        onClick={() => {
                          if (validateStep1()) {
                            handleNextStep();
                          }
                        }}
                      >
                        Next
                      </button>
                      <svg
                        className="svgpform"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#4073ff"
                          d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z"
                          transform="translate(100 100)"
                          className="path"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <div
                        style={{ marginBottom: "0px" }}
                        className="form-group"
                      >
                        <label
                          className="label_pop"
                          htmlFor="businessIndustry"
                        >
                          Your Business Industry *
                        </label>
                        <select
                          id="businessIndustry"
                          className="form-control form-field"
                          required
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                        >
                          <option value="">
                            Select your business industry
                          </option>
                          <option value="Graphic Designing">
                            Graphic Designing
                          </option>
                          <option value="Website Development">
                            Website Development
                          </option>
                          <option value="Mobile App Development">
                            Mobile App Development
                          </option>
                          <option value="Customized theme for my website">
                            Customized theme for my website
                          </option>
                          <option value="Maintenance service for my website">
                            Maintenance service for my website
                          </option>
                        </select>
                      </div>
                      <div
                        style={{ marginBottom: "0px" }}
                        className="form-group"
                      >
                        <label className="label_pop" htmlFor="budgetRange">
                          Budget Price Range *
                        </label>
                        <input
                          id="budgetRange"
                          type="text"
                          className="form-control form-field"
                          placeholder="Enter your budget"
                          required
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                        />
                      </div>
                      <div
                        style={{ marginBottom: "0px" }}
                        className="form-group"
                      >
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
                      
                      {/* Checkbox Field */}
                      <div
                        style={{ marginBottom: "15px" }}
                        className="form-group"
                      >
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="agreeTerms"
                            required
                            checked={agreeToTerms}
                            onChange={(e) => setAgreeToTerms(e.target.checked)}
                          />
                          <label className="form-check-label label_pop" htmlFor="agreeTerms">
                            I agree to the terms and conditions *
                          </label>
                        </div>
                      </div>

                      <div
                        style={{ marginBottom: "0px" }}
                        className="w-100 d-flex justify-content-between form-group"
                      >
                        <button
                          style={{ width: "50%" }}
                          className="global-btn"
                          type="button"
                          onClick={handlePreviousStep}
                        >
                          Back
                        </button>
                        <button
                          style={{ marginLeft: "5px", width: "50%" }}
                          className="global-btn"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                      {status && <p style={{ paddingTop: "10px" }}>{status}</p>}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackFridayPopup;