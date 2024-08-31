import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ProcessTwo from './ProcessTwo'

import Aos from "aos";
import "aos/dist/aos.css";

const DigitalMarkInnerDetails = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section className="space">
        <div className="container">
          <div className="row gx-30">
            <div className="col-xxl-12 col-lg-12">
              <div className="service-details-content">
                <h3 className="text-white page-title mt-40 mb-20">
                Revolutionizing E-Commerce: Digious Solutions' Rise to Industry Leadership
                </h3>
              </div>
              <p>
              We set out years ago to create a contemporary shop for new-age businesses seeking to pitch their products in the competitive digital world. With our best digital solutions to businesses at a lower level, we managed to rise through the ranks, ultimately becoming a household name in the e-commerce ecosystem. Today, Digious Solutions has decorated dozens of businesses with trailblazing designs, ideas, and layouts.
              </p><br></br>
              <p>
              Whether you’re a seed-stage venture or a blooming decacorn, our digital services for businesses are warranted to attract customers’ eyes. Our best web digital solutions for businesses include 
              </p>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Graphics Design
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />A business consultant
                    Website Development
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    E-Commerce Solution
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Game Development
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Mobile App Development
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Software Development
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Digital Marketing
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Software Quality Assurance
                  </li>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
              Our digital marketing services for businesses are mould-breaking
              </h3>
              <p className="mb-30">
              We, at Digious Solution, are driven by new-fashioned marketing. Our resourceful team cherry-picks ideas to boost your small businesses in the online digital market. Our plans for start-ups and established companies are trailblazing and unique. Digious Solutions doesn’t believe in a cookie-cutter approach. Our team has a thirst for innovation, and each day we set out to decorate a new brand in the digital marketing world. 
              </p>
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="page-thumb style2"
                  >
                    <img src="assets/img/service/graphic-3.jpg" alt="img" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="page-thumb style2"
                  >
                    <img src="assets/img/service/graphic-4.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <p className="mt-30 mb-n1">
                Web designing in a powerful way of just not an only professions,
                however, in a passion Company. have a to a tendency to believe
                the idea that smart looking of an is the impression on
                visitors.Web designing in a powerful way only professions Web
                designing in a powerful way
              </p>
            </div>
            {/* <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_categories widget_service-categories">
                                <ul>
                                    <li>
                                        <Link to="/service">Personal service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Education service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Student service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Wedding service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Car service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Business service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Others service</Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div> */}
          </div>
        </div>
      </section>

      {/* Section of portfolio starts from here */}

      <div className="portfolio-area-3 space">
        <div className="container">
          <div className="row justify-content-center align-items-end">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className="col-xl-6">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Latest Projects of Graphic Design
                </span>
                <h2 className="sec-title style2">
                  Guiding Businesses Toward Success
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-30 gy-30">
            <div data-aos="fade-up" data-aos-delay="600" className="col-lg-6">
              <div className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="assets/img/service/graphic-3.jpg" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/">
                      Your Business Goals with the Confidence
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    We have been operating for over a decade, providing
                    top-notch services to our clients and building
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-delay="700" className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="assets/img/service/graphic-4.jpg" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/">
                      Your Business Goals with the Confidence
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    We have been operating for over a decade, providing
                    top-notch services to our clients and building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarkInnerDetails;
