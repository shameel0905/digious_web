import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ProcessTwo from './ProcessTwo'

import Aos from "aos";
import "aos/dist/aos.css";

const ECommerWebInnerDetails = () => {
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
                Want to build up an eCommerce business? 
                </h3>
              </div>
              <p>
              Digious Solution allows you to run your e-commerce business online. We are here for acknowledging you with the benefits of e-commerce business and to offer you quality solutions for developing and upgrading your e-commerce website sales so that you can go online and broaden your audience.

We can convert your ideas to life by delivering our digital experiences. With us, build and grow your e-commerce online business effectively and meet all your e-commerce marketing needs.
              </p>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Connect with ERP, CRM, and third-party APIs for enhanced data synchronization and efficiency.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />Modify and expand your online store to meet evolving business and customer needs.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Secure transactions and protect customer data with strong encryption and compliance measures.
                  </li>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
              Our Experts
              </h3>
              <p className="mb-30">
              Our experts fully support and guide you to decide what you wish to sell. Digious Solution offers you to discover all the services and explore ways to elevate your online e-commerce business. We make every effort for providing you the best e-commerce website, including quick and convenient ways of selling and upgrading your commodities online at any time. If you assess launching an E-Commerce store, we are here to help you by offering affordable features as per your preferences and limits. Let our chiefs help you in designing and developing e-commerce websites & stores as per your business needs.
              </p>

              <h3 className="text-white page-title mb-20">
              Our Major Goal
              </h3>
              <p className="mb-30">
              Our major goal is to deliver a great experience to our customers. Digious Solution creates and customizes your e-business and provides you best experiences. Our determined team works in guiding and providing you the best and top e-commerce companies. We develop, design, and offer you extraordinary e-commerce websites for your e-commerce online transactions. We help you promote your online business.
              </p>

              <h3 className="text-white page-title mb-20">
              Our Experienced & Efficient Team
              </h3>
              <p className="mb-30">
              Our experienced and efficient team facilitates you to develop and successfully run your best e-commerce website as per your e-business requirements. We provide complete e-business solutions to companies. Also we facilitate our clients by providing their services, for instance, buying and selling of commodities as well as services, google shopping ads, mobile ads, transferring funds and data, and more. Digious Solutions helps e-businesses achieve their goal by providing e-commerce marketing services. Our mission is to work with you as a partner and help you maintaining and running your e-commerce site successfully.
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
                       src="/assets/videos/services/ecommerce/showcase1.mp4"   
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
                      src="/assets/videos/services/ecommerce/showcase2.mp4"   
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
              We provide everything you need to succeed. Ensure the highest security with our robust data protection and compliance standards. Let us help you enhance operational efficiency and drive sales in today's competitive market.
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
                  Latest Projects of ECommerce
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

export default ECommerWebInnerDetails;
