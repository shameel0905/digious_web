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
                  E-Commerce Development That Grows Your Business
                </h3>
              </div>
              <p>
                Digious Solutions provides professional e-commerce website development and design services to help your brand build a powerful online presence. As a trusted e-commerce solutions provider, we create responsive, secure, and user-friendly online stores that attract customers, boost engagement, and increase sales.  
              </p>
              <p>Our team combines creativity, strategy, and technology to deliver e-commerce platforms optimized for speed, SEO, and conversions. Whether you’re launching a new store or upgrading an existing one, we provide tailored solutions to help your business scale.</p>
              <div className="service-details-content">
                <h3 className="text-white page-title mt-40 mb-20">
                  What We Offer:  Our E-Commerce Expertise
                </h3>
              </div>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Custom E-Commerce Development:
                  </li>
                  <p>Build a fully customized online store aligned with your brand, products, and growth strategy.</p>
                  <li>
                    <i className="fas fa-check-circle" /> Responsive Store Design:
                  </li>
                  <p>Ensure seamless shopping experiences across desktop, mobile, and tablets.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Inventory & ERP Integration:
                  </li>
                  <p>Connect your store with Shopify, WooCommerce, and third-party APIs for efficient management.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Secure Online Payment Processing:
                  </li>
                  <p>Protect customer data and transactions with strong compliance measures</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Store Optimization & Marketing:
                  </li>
                  <p>Enhance conversions through UI/UX improvements, analytics, and marketing tools.</p>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
                Building Online Stores That Deliver Results
              </h3>
              <p className="mb-10">
                At Digious Solutions, we don’t just build e-commerce websites; we build growth platforms. Our experts focus on clean code, fast performance, and data-driven design to ensure your store performs flawlessly and scales with your business.
              </p>
              <p className="mb-30">
                We prioritize results through higher traffic, improved engagement, and stronger conversions, helping brands succeed in competitive digital markets.
              </p>

              <h3 className="text-white page-title mb-20">
                Launch Your E-Commerce Store with Confidence
              </h3>
              <p className="mb-30">
                Partner with  Digious Solutions for expert e-commerce website development and inventory management solutions. We build custom online stores with secure payment processing, seamless integrations, and user-focused design that drives sales.
              </p>
              <p className="mt-30 mb-40">
               <Link to="/contact"> Book your free consultation</Link> today and get a tailored strategy to launch your e-commerce store and start generating revenue.
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
