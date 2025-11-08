import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ProcessTwo from './ProcessTwo'

import Aos from "aos";
import "aos/dist/aos.css";

const GameDevInnerDetails = () => {
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
                Mobile Game Development That Delivers Results
                </h3>
              </div>
              <p>
              Digious Solutions is a trusted mobile game development company delivering innovative and interactive games for iOS, Android, web, and AR/VR platforms. We combine creativity, strategy, and technology to create games that captivate users, boost engagement, and help your brand stand out in the competitive gaming industry.
              </p>
               <p>
              Whether you’re launching a new game, expanding your gaming company, or seeking expert game development services, we provide end-to-end solutions tailored to your audience and goals.
              </p>
              <div className="service-details-content">
                <h3 className="text-white page-title mt-40 mb-20">
               What We Offer:  Our Game Development Expertise
                </h3>
              </div>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    2D & 3D Game Development:
                  </li>
                  <p>Vibrant 2D and immersive 3D games with engaging gameplay and stunning graphics.</p>
                  <li>
                    <i className="fas fa-check-circle" />Mobile Game Development (iOS & Android):
                  </li>
                  <p>Optimized for mobile devices with smooth performance, multiplayer support, and platform integration.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Web Game Development:
                  </li>
                  <p>Browser-based games accessible on any platform, ideal for casual and real-time multiplayer experiences.</p>
                     <li>
                    <i className="fas fa-check-circle" />
                    AR/VR Game Development:
                  </li>
                  <p>Interactive AR/VR games that transport players into immersive virtual worlds.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Game UI/UX Design & Optimization:
                  </li>
                  <p>Intuitive interfaces, smooth navigation, and immersive experiences to maximize engagement and retention.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Custom Game App Development:
                  </li>
                  <p>Tailored games built to align with your brand, audience, and business objectives.</p>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
             Building High-Performing Games That Engage
              </h3>
              <p className="mb-30">
             At Digious Solutions, we don’t just develop games; we craft experiences. Our team focuses on clean coding, responsive design, and performance optimization to ensure every game runs flawlessly across devices. Using the latest tools and frameworks, we build market-ready games with scalable architecture, making it easier to update and expand features as your audience grows.
              </p> <br></br>
              <p>
              We prioritize user engagement, retention, and monetization by combining innovative gameplay, advanced graphics, and optimized UI/UX design. From casual games to VR adventures, we provide solutions that drive success in today’s competitive mobile gaming market.
              </p>
              <h3 className="text-white page-title mb-20">
             Start Your Game Development Journey Today
              </h3>
              <p>
            Partner with Digious Solutions for professional mobile, web, and AR/VR game development services in USA and Australia. We create custom games with optimized performance and immersive experiences that engage players and elevate your brand.
              </p>
              <p className="mt-30 mb-40">
              <Link to="/contact">Book your free consultation</Link> now and get a personalized game development strategy to turn your idea into a successful, revenue-generating experience.
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
                       src="/assets/videos/services/game/showcase1.mp4"   
                       autoPlay   
                       loop   
                       muted   
                       playsInline  
                       style={{ width: '100%', height: 'auto' }}  
                       alt="Game Development"  
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
                       src="/assets/videos/services/game/showcase2.mp4"   
                       autoPlay   
                       loop   
                       muted   
                       playsInline  
                       style={{ width: '100%', height: 'auto' }}  
                       alt="Game Development"  
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
                Latest Projects of Game Development
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

export default GameDevInnerDetails;
