import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ProcessTwo from './ProcessTwo'

import Aos from "aos";
import "aos/dist/aos.css";

const TermsandConditions = () => {
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
                <p>
                  Please read these terms and conditions carefully before using Our Service.
                </p>
                <h3 className="text-white page-title mt-40 mb-20">
                  Interpretation and Definitions
                </h3>
              </div>
              <div >
                <h4 className="text-white">Interpretation</h4>
              </div>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              <div >
                <h4 className="text-white">Definitions</h4>
              </div>
              <div>
                <p>For the purposes of these Terms and Conditions:</p>
                <ul>
                  <li>
                    Affiliate means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                  </li>
                  <li>
                    Country refers to: New South Wales, Australia
                  </li>
                  <li>
                    Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Digious Solutions.
                  </li>
                  <li>
                    Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                  </li>
                  <li>
                    Service refers to the Website.
                  </li>
                  <li>
                    Terms and Conditions (also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.
                  </li>
                  <li>
                    Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
                  </li>
                  <li>
                    Website refers to Digious Solutions, accessible from <a className="anchorlink" href="https://digioussolutions.com"> https://digioussolutions.com</a>
                  </li>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
                Enhance Your Brand with Cutting-Edge Graphic Design Solutions
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
                    <video
                      src="/assets/videos/services/graphics/showcase1.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: 'auto' }}
                      alt="E-Commerce Solutions"
                    > Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="page-thumb style2"
                  >
                    <video
                      src="/assets/videos/services/graphics/showcase2.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: 'auto' }}
                      alt="E-Commerce Solutions"
                    > Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              <p className="mt-30 mb-n1">
                We provide professional graphic design services for brands and businesses on the marketplace. We listen to all your dreams and determine what is feasible, cost-effective and also fits into your budget. We also can assist you in the event that you are starting your own business and are looking to establish your new brand. We want to help you be noticed in the crowded marketplace. We utilize the most current standards Photoshop, Adobe software, including Illustrator and In-Design. We are able to create creative direction for your marketing initiatives. We offer a variety of graphic design services to meet your marketing and promotional requirements. There’s no limit on what our graphic design company could make for you.
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
                  <img src="/assets/img/icon/title_left.svg" alt="shape" />
                  Our Portfolio
                </span>
                <h2 className="sec-title style2">
                  Latest Projects of Graphic Design
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-30 gy-30">
            <div data-aos="fade-up" data-aos-delay="600" className="col-lg-6">
              <div className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="/assets/img/service/graphic-3.jpg" alt="img" />
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
                  <img src="/assets/img/service/graphic-4.jpg" alt="img" />
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

export default TermsandConditions;
