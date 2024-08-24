import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterOne = () => {
  return (
    <div className="container">
      <div data-aos="fade-up" data-aos-delay="500" className="counter-area-2">
        <div className="row gy-40 justify-content-between">
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={50} />
                          +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Team member</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={20} />
                          +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Winning award</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={5} />
                          k+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Completed projects</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={10} />
                          +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Client review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
