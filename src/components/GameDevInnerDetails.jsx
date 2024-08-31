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
                Empower Your Gaming Vision: Partner with Elite Designers and Developers for Top-notch Game Development Services
                </h3>
              </div>
              <p>
              Game Development Appoint your top mobile and web game expert for the purpose to avail best game development, designing, and other services. Get yourself assembled with our proficient designers and developers. Providing you a substantial marketplace to turn your beliefs into reality.
              </p>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Digious provides experienced professionals who integrate diverse gaming elements to develop scalable and technically sound games.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />The games are crafted to be not only technically proficient but also trend-aligned for maximum engagement.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Digious offers a full spectrum of Android game development services to meet all your needs.
                  </li>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
              Unlock Your Game Development Potential with Top Developers at Digious Solutions
              </h3>
              <p className="mb-30">
              We are a trusted mobile game development firm with top game developers and designers. If you are thinking of developing or designing your game, either starting a new game company or looking for a game developer, this is the right forum for you that contributes you your top game developers and designers. There’s a day-to-day increase in the mobile apps market, most commonly games. Digious serves as your best mobile app development firm, with our team of top games developers transform your ideas into an ethical game. We modify your ideas to existence by creating game apps and giving your games a bigger and wider platform (that is for both IOS and Android)
              </p> <br></br>
              <p>
              Digious as a mobile game development company create a game app for their customers, manage their subordination as well as new and existing strategies. Furnishing our customers a wide range of instruments that help them to create game apps and works to improve your app’s aspect and performance. Digious practices to be your best 2D and 3D mobile game development platform by providing you with top mobile game developers (for both IOS and Android), facilitates you to create game apps using extraordinary 2D and 3D development details. This entitles you to create a game app and create the mobile game design for targeting your audience.
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
              <p className="mt-30 mb-n1">
              Being your mobile game development company, Digious acknowledge you about different game development app along with game development website. We are Digious, empowering you with a highly skilled team focusing and working on mobile game development as well as game development services for establishing quality experiences. Our dedicated team members act fully to make game app per your specific preferences and limits, and practices to meet all your essentials. We understand the mobile gaming industry and seeks to boost our level up and make our mark in top mobile game developers. If you ought to hire mobile game developers or web game developers, hire Digious as your top games developers.
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
