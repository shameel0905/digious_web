import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ProcessTwo from './ProcessTwo'

import Aos from "aos";
import "aos/dist/aos.css";

const MobielAppInnerDetails = () => {
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
                  Mobile App Development That Grows Your Business
                </h3>
              </div>
              <p>
                Digious Solutions provides professional mobile app development services designed to help your brand build a powerful digital presence. As a trusted mobile app development company, we create intuitive, high-performing, and scalable apps for iOS, Android, and cross-platform that attract users, increase engagement, and convert leads into customers.                
              </p>
              <p>Our team combines creativity, strategy, and technology to deliver mobile applications that are not only visually appealing but also optimized for speed, SEO, and user experience. From startups to established enterprises, we help every business grow through tailored mobile solutions.</p>
              <div className="service-details-content">
                <h3 className="text-white page-title mt-40 mb-20">
                  What We Offer:  Our Mobile App Development Expertise
                </h3>
              </div>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Custom Mobile App Development:
                  </li>
                  <p>Get a fully customized mobile application built to align with your business goals, brand identity, and long-term growth strategy.</p>
                  <li>
                    <i className="fas fa-check-circle" />iOS & Android App Development:
                  </li>
                  <p>Ensure your app performs flawlessly on all major devices using native frameworks and optimized architecture.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Cross-Platform App Development:
                  </li>
                  <p> Reach wider audiences with one codebase built using Flutter, React Native or similar technologies, delivering native-like performance.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    UI/UX Design & Optimization:
                  </li>
                  <p> Deliver intuitive interfaces and seamless user experiences that improve navigation, engagement, and satisfaction.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    App Maintenance & Support:
                  </li>
                  <p> Keep your app running smoothly with updates, bug-fixes, performance optimization, and feature enhancements designed for scalability.</p>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
                Building High-Performing Apps That Deliver Results
              </h3>
              <p className="mb-20">
                At Digious Solutions, we don’t just create apps; we build growth platforms. Our developers focus on clean code, fast performance, and data-driven structure to ensure every mobile application meets business and technical goals. Using the latest mobile frameworks and development practices, we ensure your app is SEO-friendly, secure, and ready to scale.                
              </p>
              <p className="mb-30">We prioritize results through higher visibility, increased user engagement, and stronger conversions by combining strategy with innovation. Whether you need a consumer app, enterprise mobility solution, or cross-platform deployment, our solutions are built for success.</p>
              <h3 className="text-white page-title mb-20">
                Transform Your Mobile Presence with Digious Solutions
              </h3>
              <p className="mb-30">
                Build a high-performing mobile app that drives engagement and growth. Digious Solutions, a trusted mobile app development company in USA and Australia, creates custom apps with seamless design, speed, and user experience.
              </p>
              <p className="mt-30 mb-40">
                <Link to="/contact">Book your free consultation</Link> today and let Digious Solutions help you create a mobile app that boosts engagement, conversions, and long-term customer loyalty.
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
                      src="/assets/videos/services/mobile/showcase1.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: 'auto' }}
                      alt="Mobile App Development"
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
                      src="/assets/videos/services/mobile/showcase2.m4v"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: 'auto' }}
                      alt="Mobile App Development"
                    > Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

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
                  Latest Projects of Mobile App Development
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
                  <Link to="/ui-ux-portfolio">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  </Link>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/ui-ux-portfolio">
                      Custom Mobile App Development for Businesses
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    We build high performance mobile apps with intuitive design, secure systems, and smooth functionality for users.  
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
                  <Link to="/ui-ux-portfolio">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  </Link>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/ui-ux-portfolio">
                      User Friendly Mobile Applications for Growth
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    Our apps are optimized for speed, usability, and scalability to enhance engagement and support business expansion. 
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

export default MobielAppInnerDetails;
