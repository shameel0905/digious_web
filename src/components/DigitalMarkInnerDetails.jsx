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
                Digital Marketing Services That Drive Real Results
                </h3>
              </div>
              <p>
         Digious Solutions delivers results-driven digital marketing services designed to help businesses grow faster, reach wider audiences, and generate measurable ROI. As a trusted digital marketing agency, we combine creativity, strategy, and analytics to build campaigns that elevate your brand visibility and drive sustainable growth in the competitive online marketplace.
              </p>
              <p>
              Our team of marketing professionals helps businesses of all sizes from startups to enterprises achieve their digital potential through tailored, data-backed strategies that boost engagement, increase leads, and turn clicks into customers.
              </p>
              <div className="service-details-content">
                <h3 className="text-white page-title mt-40 mb-20">
               What We Offer:  Our Digital Marketing Expertise
                </h3>
              </div>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Search Engine Optimization (SEO)
                  </li>
                  <p>Enhance your website’s visibility and rank higher on Google with strategic keyword targeting, technical optimization, and content-driven SEO.</p>
                  <li>
                    <i className="fas fa-check-circle" />A business consultant
                    Pay-Per-Click (PPC)
                  </li>
                  <p>Drive instant, qualified traffic with precision-targeted PPC campaigns focused on ROI and measurable conversions.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Social Media Marketing (SMM)
                  </li>
                  <p>Build a powerful online community through data-driven social media strategies that engage, grow, and convert your audience.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Content Marketing
                  </li>
                  <p>Strengthen your brand authority with high-quality content creation, storytelling, and strategic distribution across all digital channels.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Email Marketing
                  </li>
                  <p>Connect directly with your audience through personalized email campaigns that increase engagement, retention, and conversions.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                     Conversion Rate Optimization (CRO)
                  </li>
                  <p>Turn traffic into customers with A/B testing, user behavior insights, and performance tracking to maximize conversion rates.</p>
                  
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
              Building Data-Driven Marketing Strategies That Convert
              </h3>
              <p className="mb-20">
             At Digious Solutions, we don’t just market, we deliver measurable success. Our approach combines performance marketing, advanced analytics, and creative execution to ensure every campaign drives tangible results. From SEO and PPC to full-scale social media campaigns, we tailor our digital marketing solutions to your audience, goals, and industry trends.
              </p>
              <p className="mb-30">We focus on what truly matters visibility, engagement, and conversions. Our experts analyze every aspect of your online presence to ensure maximum ROI, using proven tools and techniques that align your brand with the ever-evolving digital landscape.</p>
              <h3 className="text-white page-title mb-20">
              Grow Your Brand with Digious Solutions
              </h3>
              <p className="mb-30">
             Accelerate your business growth with Digious Solutions, a trusted digital marketing agency in USA and Australia. Our tailored strategies help increase online visibility, attract qualified leads, and convert traffic into real sales.
              </p>
              <p className="mt-30 mb-40">
              Start growing your brand today by booking your <Link to="/contact">free digital marketing consultation</Link> and get a custom growth strategy designed for your business.
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
                       src="/assets/videos/services/marketing/showcase1.mp4"   
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
                       src="/assets/videos/services/marketing/showcase2.mp4"   
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
                Latest Projects of Digital Marketing
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

export default DigitalMarkInnerDetails;
