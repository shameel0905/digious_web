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
                  Digital Marketing
                  Digious Solutions is a leading graphic agency that offers the
                  highest high-quality graphic design services.
                </h3>
              </div>
              <p>
                Being the most effective graphic design firm, we provide
                top-quality graphic design services. Our talented graphic
                designers can create professional branding and graphic design
                for you. If you’re looking for graphic design or graphic
                products, then you should consider us. We are the most reputable
                graphic design company.
              </p>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Navigate the Path to Success Achieve Your Business Goals
                    with Confident
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />A business consultant
                    is a professional who provides expert
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Guidance to businesses on various aspects such as management
                  </li>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
                Navigate the Path to Success
              </h3>
              <p className="mb-30">
                Whatever business you are in, if the design and graphics aren’t
                appealing enough to draw their attention customers Then you have
                to take action to change it. Our skilled graphic designers
                remain up to date with the most recent trends in Graphic
                Designing around the world and we are fully aware of the
                necessity of it and the worth we can bring to these
                developments. Digious Solutions offers the best solutions for
                graphic design and multimedia in accordance with your
                requirements and needs. Our graphic design services that we
                offer are distinctive and we take great satisfaction in the work
                we’ve accomplished. If you are looking to improve the existing
                design or to design something completely fresh, we’re waiting to
                help!
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
