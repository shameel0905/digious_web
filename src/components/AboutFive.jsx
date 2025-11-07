import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutFive = () => {

  useEffect(() => { Aos.init() });

  return (
    <section className="">
      <div className="about-area-5">
        <div className="shadow-shape-left" />
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center justify-content-between">
            <div className="col-xl-5">
              <div data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="500" className="about-thumb5">
                <div className="img1">
                  <img  src="assets/img/normal/about-us.jpg" alt="img" />
                </div>
                <div className="about-counter-wrap jump-reverse">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={10} />
                            K+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <p className="sec-desc">Client Review</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="500" className="col-xl-7">
              <div className="title-area mb-40">
                <span className="sub-title style2">
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title style2 text-white">
                  Why Choose Digious Solutions ?
                </h2>
                <p className="sec-text text-white mb-30">
               At Digious Solutions, we combine strategic planning, innovation, and efficiency to deliver exceptional IT and digital solutions. Our focus is not only on quick turnaround times but also on creating unique, high-quality projects tailored to your industry needs.
                </p>
                <p className="sec-text text-white">
               We believe in transparent communication and keep our clients involved throughout every stage of the process. With our cost-effective approach, you receive premium results at competitive prices without compromising on quality.
                </p>
                <p className="sec-text text-white">
              Ready to elevate your business? <Link to="/contact" >
                  Contact Digious Solutions 
                </Link> today for a free consultation and let’s bring your vision to life.
                </p>
              </div>
              <div className="btn-wrap">
                <Link to="/about" className="global-btn style3">
                  Learn More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFive;
