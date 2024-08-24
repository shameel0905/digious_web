import React from "react";
import Slider from "react-slick";

const TestimonialOne = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="TestimonialOne-icon-box-next">
        <button
          onClick={onClick}
          className="slick-arrow style2 default team-slider2-next"
        >
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="TestimonialOne-icon-box-prev">
        <button
          onClick={onClick}
          className="team-slider2 slick-arrow style2 default team-slider2-prev"
        >
          <i className="fas fa-arrow-left" />
        </button>
      </div>
    );
  }
  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="testimonial-area-1  overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div data-aos="fade-up" data-aos-delay="500" className="title-area">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Clients Testimonial
              </span>
              <h2 className="sec-title style2">
              Valuable Feedback from Our Clients
              </h2>
            </div>
            <div data-aos="fade-right" data-aos-delay="500" className="testimonial-thumb1">
              <img src="assets/img/testimonial/testimonial-1-1.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div data-aos="fade-up" data-aos-delay="500" className="title-area">
              <p className="testi-desc">
              Read our valued clients' experiences with Digious Solutions. See how our dedicated team helped them achieve their business goals with tailored IT solutions.
              </p>
            </div>
            <div className="testi-area-slider">
              <div className="row global-carousel testi-slider-1">
                <Slider {...settings}>
                  <div className="p-2">
                    <div className="testi-card">
                      <div className="testi-card_content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="testi-card_text">
                        Working with Digious was fantastic! They were flexible, inclusive and reliable. Despite my changing demands, they delivered a stylish, user-friendly, exceptional website. Great service that I highly recommend. Thank you Digious!
                        </p>
                        <div className="testi-card-profile">
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testi-thumb_3.png"
                              alt="img"
                            />
                          </div>
                          <div className="testi-card-profile-details">
                            <h4 className="testi-profile-title">
                              Muhammad
                            </h4>
                            <span className="testi-profile-desig">
                              Upwork Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote1-1.svg" alt="img" />
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="testi-card">
                      <div className="testi-card_content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="testi-card_text">
                        My Digious experience was terrific! Proving flexibility and always keeping me informed, they created a fantastic, intuitive website that received positive feedback, regardless of last-minute changes. Strongly endorse their creative web development expertise. Amazing job, Digious!
                        </p>
                        <div className="testi-card-profile">
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testi-thumb_2.png"
                              alt="img"
                            />
                          </div>
                          <div className="testi-card-profile-details">
                            <h4 className="testi-profile-title">
                              Serena Jones
                            </h4>
                            <span className="testi-profile-desig">
                              Upwork Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote1-1.svg" alt="img" />
                      </div>
                    </div>
                  </div>

                 
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
