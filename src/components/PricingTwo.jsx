// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConsultPopup from "../components/price_first";


const PricingTwo = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);


  return (
    <section className="bg-dark2">
      {isPopupOpen && <ConsultPopup onClose={closePopup} />}
      <div
        className="pricing-area-3 space-top"
        style={{
          backgroundImage: "url(assets/img/bg/pricing-bg2-1.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="title-area text-center">
                <span
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="sub-title style2"
                >
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  Our Pricing
                </span>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="sec-title style2 text-white"
                >
                  Cost-Effective Plans for Our Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center align-items-center">
            <div className="col-xl-4 col-md-6">
              <div
                data-aos="fade-left"
                data-aos-delay="700"
                className="pricing-card style2"
              >
                <h4 className="pricing-card_title">Web Development</h4>
                <div className="pricing-card-price-wrap">
                  <h3 className="pricing-card_price">
                    <span className="currency">$</span>199
                    {/* <span className="duration">/month</span> */}
                  </h3>
                </div>
                <div className="pricing-card-details">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-check" />
                        Responsive Design
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        User-Friendly Interface
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        SEO Optimized
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Customized CMS
                      </li>
                    </ul>
                  </div>
                  <Link onClick={openPopup} className="global-btn">
                    Get Quote Now{" "}
                    <img src="assets/img/icon/right-icon2.svg" alt="arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                className="pricing-card style2 active"
              >
                <h4 className="pricing-card_title">Graphic Designing</h4>
                <div className="pricing-card-price-wrap">
                  <h3 className="pricing-card_price">
                    <span className="currency">$</span>99
                    {/* <span className="duration">/month</span> */}
                  </h3>
                </div>
                <div className="pricing-card-details">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-check" />
                        Brand Consistency
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Innovative Concepts
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Versatile Designs
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Attention to Detail
                      </li>
                    </ul>
                  </div>
                  <Link onClick={openPopup} className="global-btn">
                      Get Quote Now{" "}
                      <img src="assets/img/icon/right-icon2.svg" alt="arrow" />
                    </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                data-aos="fade-right"
                data-aos-delay="900"
                className="pricing-card style2"
              >
                <h4 className="pricing-card_title">Digital Marketing</h4>
                <div className="pricing-card-price-wrap">
                  <h3 className="pricing-card_price">
                    <span className="currency">$</span>299
                    {/* <span className="duration">/month</span> */}
                  </h3>
                </div>
                <div className="pricing-card-details">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-check" />
                        Target Audience Research
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        SEO Implementation
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Content Marketing
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Data Analysis
                      </li>
                    </ul>
                  </div>
                  <Link onClick={openPopup} className="global-btn">
                      Get Quote Now{" "}
                      <img src="assets/img/icon/right-icon2.svg" alt="arrow" />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTwo;
