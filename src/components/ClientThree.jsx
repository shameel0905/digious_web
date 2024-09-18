import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const ClientThree = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="bg-dark2">
      <div className="client-area-4 space">
        {/* <div className="shadow-shape-right" /> */}
        <div className="container">
          <div className="row gx-90 d-flex justify-content-between global-carousel">
            <Slider {...settings}>
              <div className="px-3">
                <div className="client-logo">
                  <Link to="https://agencyvista.com/agency/digious-solutions/marketing-agency-19-kimian-avenue-west-waratah-nsw-2298-au/summary">
                    <img src="assets/img/client/agencyVista.png" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="client-logo">
                  <Link to="https://www.bark.com/en/gb/company/digious-solutions/zAZ0n/">
                    <img src="assets/img/client/bark.png" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="client-logo">
                  <Link to="https://clutch.co/profile/digious-solutions-0">
                    <img src="assets/img/client/clutch.png" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="client-logo">
                  <Link to="https://www.trustpilot.com/review/digioussolutions.com">
                    <img src="assets/img/client/trustpilot.png" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="client-logo">
                  <Link to="https://www.yelp.com/biz/digious-solutions-waratah-west">
                    <img src="assets/img/client/yelp.png" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="client-logo">
                  <Link to="https://agencyvista.com/agency/digious-solutions/marketing-agency-19-kimian-avenue-west-waratah-nsw-2298-au/summary">
                    <img src="assets/img/client/agencyVista.png" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="client-logo">
                  <Link to="https://www.bark.com/en/gb/company/digious-solutions/zAZ0n/">
                    <img src="assets/img/client/bark.png" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="client-logo">
                  <Link to="https://clutch.co/profile/digious-solutions-0">
                    <img src="assets/img/client/clutch.png" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="client-logo">
                  <Link to="https://www.trustpilot.com/review/digioussolutions.com">
                    <img src="assets/img/client/trustpilot.png" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="client-logo">
                  <Link to="https://www.yelp.com/biz/digious-solutions-waratah-west">
                    <img src="assets/img/client/yelp.png" alt="img" />
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientThree;
