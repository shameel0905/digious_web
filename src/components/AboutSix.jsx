import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";

import CountUp from "react-countup";
const AboutSix = () => {

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
                  <img  src="/assets/img/normal/about-us.jpg" alt="img" />
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
                  <p className="sec-desc">Client Reviews</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="500" className="col-xl-7">
              <div className="title-area mb-40">
                <span className="sub-title style2">
                  <img src="/assets/img/icon/title_left2.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title style2 text-white">
                  Success Starts with Digious Solutions
                </h2>
                <p className="sec-text text-white mb-30">
                 At Digious Solutions, we don’t just provide IT and digital services. We craft innovative solutions that set your business apart. By combining strategic planning, cutting-edge technology, and unmatched efficiency, we deliver projects that are unique, high-quality, and tailored to your industry’s needs.<br></br>Our commitment to transparency and collaboration means you stay involved at every stage, ensuring your vision comes to life exactly as imagined. With our cost-effective, results-driven approach, you get premium solutions at competitive prices without compromising on quality.
                </p>
                <p className="sec-text text-white">
                  Partner with Digious Solutions today, <Link to="/contact">schedule your free consultation</Link> , and let’s create solutions that inspire, innovate, and deliver measurable results.
                </p>
              </div>
              {/* <div className="btn-wrap">
                <Link to="/about" className="global-btn style3">
                  Learn More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSix;
