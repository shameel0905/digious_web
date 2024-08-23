import React, { useState } from "react";

const ConsultPopup = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const progressPercentage = (step / 2) * 100;

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 image-section">
            <img className="h-100" src="assets/img/normal/pop.jpg" alt="img" />
          </div>
          <div className="col-lg-8">
            <div className="form-section">
              <div style={{textAlign: "end"}}>
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
              {step === 1 ? (
                <div>
                  <h2 className="text-center pop_font_head">
                    Get a FREE Proposal 👋
                  </h2>
                  <p className="pop_sub_head">Fill this form below</p>

                  <form>
                    <div style={{ marginBottom: "0px" }} className="form-group">
                      <label className="label_pop" htmlFor="fName">
                        Enter Your Full Name
                      </label>
                      <input
                        id="fName"
                        className="form-field"
                        type="text"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "0px" }} className="form-group">
                      <label className="label_pop" htmlFor="email">
                        Enter Your Email
                      </label>
                      <input
                        id="email"
                        className="form-field"
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "0px" }} className="form-group">
                      <label className="label_pop" htmlFor="pNumber">
                        Enter Your Phone Number
                      </label>
                      <input
                        id="pNumber"
                        className="form-field"
                        type="text"
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    <button
                      className="w-100 global-btn"
                      type="button"
                      onClick={handleNextStep}
                    >
                      Next
                    </button>
                  </form>
                </div>
              ) : (
                <div>
                  <form>
                    <div style={{ marginBottom: "0px" }} className="form-group">
                      <label className="label_pop" htmlFor="businessIndustry">
                        Your Business Industry:
                      </label>
                      <select
                        id="businessIndustry"
                        className="form-control form-field"
                        required
                      >
                        <option value="" disabled selected>
                          Select your business industry
                        </option>
                        <option>Brand new website for my business</option>
                        <option>Revamp my website</option>
                        <option>Customized plugin for my website</option>
                        <option>Customized theme for my website</option>
                        <option>Maintenance service for my website</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: "0px" }} className="form-group">
                      <label className="label_pop" htmlFor="budgetRange">
                        Budget Price Range:
                      </label>
                      <input
                        id="budgetRange"
                        type="text"
                        className="form-control form-field"
                        placeholder="Enter your budget"
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "0px" }} className="form-group">
                      <label className="label_pop" htmlFor="projectDesc">
                        Project Description
                      </label>
                      <textarea
                        id="projectDesc"
                        className="form-field"
                        rows="3"
                        placeholder="Describe your project"
                        required
                      ></textarea>
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
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultPopup;
