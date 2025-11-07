import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import Aos from "aos";
import "aos/dist/aos.css";

const WebsiteInnerDetails = () => {
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
                Website Development Services That Grow Your Business
                </h3>
              </div>
              <p>
              Digious Solutions provides professional website development services designed to help your brand build a powerful online presence. As a trusted web development company, we create responsive, high-performing, and visually stunning websites that attract visitors, boost engagement, and convert leads into customers.
              </p>
              <p>
              Our development team combines creativity, strategy, and technology to deliver websites that are not only beautiful but also optimized for speed, SEO, and user experience. From startups to established enterprises, we help every business grow through tailored digital solutions.
              </p>
               <div className="service-details-content">
                <h3 className="text-white page-title mt-40 mb-20">
               What We Offer:  Our Web Development Expertise
                </h3>
              </div>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                     Custom Website Development:
                  </li>
                  <p>
              Get a fully customized website built to align with your business goals, brand identity, and long-term growth strategy.
              </p>
                  <li>
                    <i className="fas fa-check-circle" />Responsive Web Design:
                  </li>
                  <p>
              Ensure your website looks and performs flawlessly on every device, from desktops to smartphones.
              </p>
                  <li>
                    <i className="fas fa-check-circle" />
                   E-Commerce Development:
                  </li>
                  <p>
              Launch an online store that is secure, scalable, and easy to manage with seamless product, order, and payment integration.
              </p>
                <li>
                    <i className="fas fa-check-circle" />
                  Website Redesign Services:
                  </li>
                  <p>
             Transform outdated websites into modern, visually appealing, and conversion-focused digital experiences.
              </p>
              <li>
                    <i className="fas fa-check-circle" />
                  UI/UX Design and Optimization:
                  </li>
                  <p>
             Deliver intuitive interfaces that improve navigation, engagement, and overall user satisfaction.
              </p>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
              Building High-Performing Websites That Deliver Results
              </h3>
              <p className="mb-30">
              At Digious Solutions, we don’t just build websites; we build growth platforms. Our developers focus on clean code, fast performance, and data-driven structure to ensure every website meets business and technical goals. Using the latest frameworks and HTML development practices, we ensure your site is SEO-friendly, secure, and easy to scale.
              </p>
              <p className="mb-30">
            We prioritize results through higher visibility, increased engagement, and stronger conversions by combining strategy with innovation. Whether you need a corporate website, eCommerce platform, or custom web portal, our solutions are built for success.
              </p>
                <h3 className="text-white page-title mb-20">
              Transform Your Online Presence with Digious Solutions
              </h3>
              <p className="mb-30">
              Your website is the face of your business. Digious Solutions, a trusted website development company in USA and Australia, builds custom websites with seamless design, functionality, and performance that attract visitors and drive conversions.
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
                       src="/assets/videos/services/website/showcase1.mp4"   
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
                       src="/assets/videos/services/website/showcase2.mp4"   
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
              Book your free consultation today or <Link to="/website-design-portfolio">explore our portfolio</Link> to see how we’ve helped businesses increase traffic, engagement, and sales.
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
                Latest Projects of Web Development
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-30 gy-30">
            <div data-aos="fade-up" data-aos-delay="600" className="col-lg-6">
            <Link to="/case-studies/autowriter">
              <div className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="/assets/img/case-studies/autowriter/cover.jpg" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <span className="portfolio-card-details_subtitle">
                    Artificial Intelligence
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/case-studies/autowriter">
                    Autowriter | Smartest and Easiest Way to Write Content
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                  AutoWriter.ai is a smart content generation tool powered by cutting-edge AI models, including OpenAI’s GPT-4, Anthropic, and Google’s language systems.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            {/* <div className="col-lg-6">
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
            </div> */}
          </div>
        </div>
         </div>
    </>
  );
};

export default WebsiteInnerDetails;
