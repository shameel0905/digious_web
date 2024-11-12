import React, { useState } from "react";
import emailjs from "emailjs-com";

const ConsultPopup = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
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
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      full_name: fullName,
      email: email,
      phone_number: phone,
      industry: industry,
      budget: budget,
      project_description: description,
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
          setStatus("Thanks !");
          // Reset form fields
          setFullName("");
          setEmail("");
          setPhone("");
          setIndustry("");
          setBudget("");
          setDescription("");
        },
        (error) => {
          setStatus("Failed to send email.");
        }
      );
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="row justify-content-center align-items-center">
          {/* <div className="col-lg-4 image-section">
            <img className="h-100" src="assets/img/normal/pop.jpg" alt="img" />
          </div> */}
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
                      Get a FREE Proposal 👋
                    </h2>
                    <p className="pop_sub_head">Fill this form below</p>

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
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <button
                      className="w-100 global-btn"
                      type="button"
                      onClick={handleNextStep}
                    >
                      Next
                    </button>
                    <svg class="svgpform" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4073ff" d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z" transform="translate(100 100)" class="path"></path>
  </svg>
                  </div>
                ) : (
                  <div>
                    <div style={{ marginBottom: "0px" }} className="form-group">
                      <label className="label_pop" htmlFor="businessIndustry">
                        Your Business Industry:
                      </label>
                      <select
                        id="businessIndustry"
                        className="form-control form-field"
                        required
                        onChange={(e) => setIndustry(e.target.value)}
                      >
                        <option value="" disabled selected>
                          Select your business industry
                        </option>
                        <option value="Brand new website for my business">
                          Brand new website for my business
                        </option>
                        <option value="Revamp my website">
                          Revamp my website
                        </option>
                        <option value="Customized plugin for my website">
                          Customized plugin for my website
                        </option>
                        <option value="Customized theme for my website">
                          Customized theme for my website
                        </option>
                        <option value="Maintenance service for my website">
                          Maintenance service for my website
                        </option>
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
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                    {status && <p style={{ paddingTop: "10px" }}>{status}</p>}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultPopup;
