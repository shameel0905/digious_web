import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ProcessTwo from './ProcessTwo'

import Aos from "aos";
import "aos/dist/aos.css";

const ServiceInnerDetails = () => {
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
                  Graphic Design Services to Elevate Your Brand
                </h3>
              </div>
              <p>
                Digious Solutions delivers professional and creative graphic design services that help your brand stand out in a competitive market. As a leading graphic design agency, we craft impactful visuals that strengthen your identity, attract more customers, and boost engagement across all digital and print platforms. Our designs combine creativity, strategy, and technology to make your brand unforgettable.
              </p>
              <div className="service-details-content">
                <h3 className="text-white page-title mt-40 mb-20">
                  Choose What You Need from Our Professional Design Services
                </h3>
              </div>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Logo Design & Brand Identity:
                  </li>
                  <p>Build a strong and memorable brand image that reflects your business values.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Social Media & Marketing Graphics:
                  </li>
                  <p>Create engaging visuals that boost clicks, awareness, and conversions.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Website & UI/UX Design:
                  </li>
                  <p>Design modern, user-friendly interfaces that enhance customer experience.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Print & Advertising Designs:
                  </li>
                  <p>Develop high-quality brochures, flyers, and business cards with consistent branding.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    2D & 3D Animation:
                  </li>
                  <p>Bring your ideas to life with dynamic visuals that capture attention.</p>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
                Expert Design Team That Brings Your Vision to Life
              </h3>
              <p className="mb-30">
                Our experienced designers combine innovation with strategy to deliver exceptional visual solutions. Every project is carefully crafted to align with your business goals, ensuring consistent branding and impactful storytelling. From logos and social media creatives to UI/UX designs and animations, our team focuses on building visuals that drive real results.
              </p>
              <h3 className="text-white page-title mb-20">
                Transform Your Brand with Creative Graphic Design
              </h3>
              <p className="mb-30">
                Your brand’s first impression matters. We help businesses create strong, cohesive, and professional visual identities that leave a lasting impact. Our graphic design experts focus on clarity, creativity, and conversion — ensuring your visuals not only look great but perform effectively across platforms.
              </p>
               <h3 className="text-white page-title mb-20 mt-20">
                Start Your Design Project with Digious Solutions
              </h3>
              <p className="mb-30">
                Partner with Digious Solutions for expert graphic design services in USA and Australia. We create custom logos, marketing visuals, and digital artwork that enhance engagement, strengthen your brand, and drive business growth.
              </p>
              <p className="mb-40">
                Book your free consultation today or <Link to="/graphic-portfolio">explore our portfolio</Link> to see how our designs have transformed brands and delivered results.
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
                  <img src="/assets/img/portfolio/logofolio/digious_portfolio3.jpg" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <Link to="/graphic-portfolio">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  </Link>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/graphic-portfolio">
                      Creative Graphic Design for Brand Growth
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    We design impactful visuals that strengthen brand identity, increase engagement, and attract your target audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-delay="700" className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="/assets/img/portfolio/logofolio/digious_portfolio2.jpg" alt="img" />
                </div>
                <div className="portfolio-card-details">
                   <Link to="/graphic-portfolio">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  </Link>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/graphic-portfolio">
                      Professional Visual Designs That Convert
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    Our graphic designs deliver clear messaging, strong branding, and consistent visuals for digital and print platforms.
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

export default ServiceInnerDetails;
