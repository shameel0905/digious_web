import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ProcessTwo from './ProcessTwo'

import Aos from "aos";
import "aos/dist/aos.css";

const SoftwareDevInnerDetails = () => {
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
                Custom Software Development That Transforms Your Business
                </h3>
              </div>
              <p>
              Digious Solutions provides professional custom software development services designed to help businesses streamline operations, improve efficiency, and scale with confidence. As a trusted custom software development company, we create secure, high-performance, and future-ready software solutions tailored to your unique goals and challenges. <br></br>Our team combines strategic thinking, cutting-edge technology, and agile development practices to deliver software that enhances productivity and delivers measurable results. From startups to enterprises, we help every business transform through customized, scalable, and intelligent software systems.
              </p>
              <div className="service-details-content">
                <h3 className="text-white page-title mt-40 mb-20">
               What We Offer:  Our Software Development Expertise
                </h3>
              </div>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Custom Software Development:
                  </li>
                  <p>Build bespoke software applications aligned with your specific business needs and workflows.</p>
                  <li>
                    <i className="fas fa-check-circle" />Enterprise Software Solutions
                  </li>
                  <p>Empower your organization with advanced enterprise applications that boost productivity and drive efficiency.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    API Development & Integration:
                  </li>
                  <p>Seamlessly connect your software with existing systems, third-party tools, and databases for smoother operations.</p>
                   <li>
                    <i className="fas fa-check-circle" />
                    Software Product Development:
                  </li>
                  <p>From concept and prototyping to full-cycle deployment, we develop innovative software products ready for market success.</p>
                    <li>
                    <i className="fas fa-check-circle" />
                    Software Testing & Quality Assurance:
                  </li>
                  <p>Ensure your software is bug-free, secure, and optimized through comprehensive performance and integration testing.</p>
                   <li>
                    <i className="fas fa-check-circle" />
                    Custom CRM Development:
                  </li>
                  <p>Strengthen customer relationships and automate business operations with tailored CRM systems designed for your industry.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Software Maintenance & Support:
                  </li>
                  <p>Keep your software up-to-date, secure, and performing at its best with ongoing maintenance and feature updates.</p>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
              Building Reliable Software That Delivers Results
              </h3>
              <p className="mb-30">
              At Digious Solutions, we don’t just develop software — we build solutions that empower growth. Our expert developers follow adaptive and agile methodologies, ensuring every application evolves with your business and the market’s demands. We focus on creating robust, scalable, and intuitive systems that integrate seamlessly into your operations.<br></br>
              By leveraging the latest frameworks, APIs, and cloud-based technologies, we ensure our software solutions are secure, efficient, and built to last. Whether it’s enterprise software, custom CRM development, or API integration, we focus on performance, usability, and long-term scalability.
              </p>
               <h3 className="text-white page-title mb-20">
              Empower Your Business with Smarter Software Solutions
              </h3>
              <p className="mb-30">
              Unlock your company’s full potential with Digious Solutions, a trusted software development partner in USA and Australia. We design powerful, results-driven software that automates workflows, improves efficiency, and accelerates growth.
              </p>
              <p className="mt-30 mb-40">
             <Link to="/contact">Get started today</Link> with a free consultation and discover how Digious Solutions can build the perfect software solution to scale your business and drive real results.
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
                       src="/assets/videos/services/software/showcase1.mp4"   
                       autoPlay   
                       loop   
                       muted   
                       playsInline  
                       style={{ width: '100%', height: 'auto' }}  
                       alt="Software Development"  
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
                       src="/assets/videos/services/software/showcase2.mp4"   
                       autoPlay   
                       loop   
                       muted   
                       playsInline  
                       style={{ width: '100%', height: 'auto' }}  
                       alt="Software Development"  
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
                Latest Projects of Software Development
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

export default SoftwareDevInnerDetails;
