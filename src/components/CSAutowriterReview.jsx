import React from "react";

const CSAutowriterReview = () => {
  return (
    <div className="testimonial-area-1 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div data-aos="fade-up" data-aos-delay="500" className="title-area">
              <span className="sub-title">
                <img src="/assets/img/icon/title_left.svg" alt="shape" />
                Clients Testimonial
              </span>
              <h2 className="sec-title style2">
                Valuable Feedback from Marcus Slater
              </h2>
            </div>
            {/* <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="testimonial-thumb1"
            >
              <img src="/assets/img/testimonial/testimonial-1-1.png" alt="img" />
            </div> */}
          </div>
          <div className="col-lg-6">
            {/* <div data-aos="fade-up" data-aos-delay="500" className="title-area">
              <p className="testi-desc">
                Read our valued clients' experiences with Digious Solutions. See
                how our dedicated team helped them achieve their business goals
                with tailored IT solutions.
              </p>
            </div> */}
            <div className="testi-area">
              <div className="testi-card">
                <div className="testi-card_content">
                  <div className="csrating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p className="testi-card_text">
                  I've been working with Digious Solutions since 2023. I shared my vision of an AI writing tool built on the Bubble platform, and their team truly brought it to life. They refined the concept, and their expertise resulted in AutoWriter.ai—a beautifully designed, fully functional AI writing app that exceeded my expectations.
                  </p>
                  <div className="testi-card-profile">
                    <div className="testi-profile_thumb">
                      <img
                        src="/assets/img/testimonial/marcus.png"
                        alt="img"
                      />
                    </div>
                    <div className="testi-card-profile-details">
                      <h4 className="testi-profile-title">Marcus Slater</h4>
                      <span className="testi-profile-desig">Slater Digital Group LLC.</span>
                    </div>
                  </div>
                </div>
                <div className="quote-icon">
                  <img src="/assets/img/icon/quote1-1.svg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSAutowriterReview