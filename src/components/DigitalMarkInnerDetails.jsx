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
                Digious Solutions on top of the Digital marketing strategies
                </h3>
              </div>
              
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                  Fueled by the industry's burgeoning digital trends and insatiable demands, Digious Solutions has cemented its foot as the best digital solutions provider. 
                  </li>
                  </ul>
                  </div>

              <p>
              In 2019, We embarked on a mission to establish a modern digital marketing agency tailored to meet the needs of innovative businesses striving to make their mark in the highly competitive digital landscape. With our top-tier digital marketing solutions, we quickly climbed the industry ranks, eventually earning recognition as a leading name in the e-commerce sphere. Today, Digious Solutions is renowned for transforming numerous businesses with cutting-edge design, creative ideation, and compelling layouts.
              </p><br></br>
              <p>
              Whether you're a fledgling startup or a flourishing decacorn, our digital marketing services are designed to capture and engage your target audience. Our premier digital marketing offerings include
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
              <p className="mt-30 mb-n1">
              Web design is more than just a profession; it's a true passion for us at our company. We firmly believe that a visually appealing website creates a lasting first impression on visitors. At our firm, web design is executed with meticulous care and artistic passion, reflecting our commitment to not just meet, but exceed, professional standards in digital marketing.
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
