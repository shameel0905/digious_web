import React from "react";
import { Link } from "react-router-dom";

const PortfolioGraphicInner = () => {
  return (
    <div className="portfolio-area-1 space-top space-bottom">
      <div className="shadow-shape-right" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="/assets/img/icon/title_left.svg" alt="shape" />
                Our Portfolio
              </span>
              <h2 className="sec-title style2">
                Latest Projects of Graphic Design{" "}
              </h2>
            </div>
          </div>
        </div>

        <div className="goal-tabs-wrapper mainTabs_div">
          <div
            className="nav nav-tabs goal-tabs-tabs port_tabs"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              id="nav-step1-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step1"
              type="button"
            >
              Logo Design
            </button>
            <button
              className="nav-link"
              id="nav-step2-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step2"
              type="button"
            >
              Infographics
            </button>
            <button
              className="nav-link"
              id="nav-step3-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step3"
              type="button"
            >
              Illustration
            </button>
            {/* <button
              className="nav-link"
              id="nav-step4-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step4"
              type="button"
            >
              Merchandise
            </button> */}
            <button
              className="nav-link"
              id="nav-step5-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step5"
              type="button"
            >
              Stationery
            </button>
            {/* <button
              className="nav-link"
              id="nav-step6-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step6"
              type="button"
            >
              Advertisement
            </button> */}
            <button
              className="nav-link"
              id="nav-step7-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step7"
              type="button"
            >
              Book Covers
            </button>
            <button
              className="nav-link"
              id="nav-step8-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step8"
              type="button"
            >
              Music Arts
            </button>
            {/* <button
              className="nav-link"
              id="nav-step9-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step9"
              type="button"
            >
              Gaming Designs
            </button> */}
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade active show"
              id="nav-step1"
              role="tabpanel"
            >
              <div className="row gy-30 gx-30 masonary-active">
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/portfolio/logofolio/logofolio (1).jpg"
                        data-lightbox="portfolio"
                        data-title="Logofolio"
                      >
                        <img
                          src="/assets/img/portfolio/logofolio/logofolio (1).jpg"
                          alt="Logofolio"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/portfolio/logofolio/logofolio (2).jpg"
                        data-lightbox="portfolio"
                        data-title="Logofolio"
                      >
                        <img
                          src="/assets/img/portfolio/logofolio/logofolio (2).jpg"
                          alt="Logofolio"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/portfolio/logofolio/logofolio (3).jpg"
                        data-lightbox="portfolio"
                        data-title="Logofolio"
                      >
                        <img
                          src="/assets/img/portfolio/logofolio/logofolio (3).jpg"
                          alt="Logofolio"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/portfolio/logofolio/logofolio (4).jpg"
                        data-lightbox="portfolio"
                        data-title="Logofolio"
                      >
                        <img
                          src="/assets/img/portfolio/logofolio/logofolio (4).jpg"
                          alt="Logofolio"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/portfolio/logofolio/logofolio (5).jpg"
                        data-lightbox="portfolio"
                        data-title="Logofolio"
                      >
                        <img
                          src="/assets/img/portfolio/logofolio/logofolio (5).jpg"
                          alt="Logofolio"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/portfolio/logofolio/logofolio (6).jpg"
                        data-lightbox="portfolio"
                        data-title="Logofolio"
                      >
                        <img
                          src="/assets/img/portfolio/logofolio/logofolio (6).jpg"
                          alt="Logofolio"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/portfolio/logofolio/logofolio (7).jpg"
                        data-lightbox="portfolio"
                        data-title="Logofolio"
                      >
                        <img
                          src="/assets/img/portfolio/logofolio/logofolio (7).jpg"
                          alt="Logofolio"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-step2" role="tabpanel">
              <div className="row gy-30 gx-30 masonary-active">
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb screen"
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/infographics/infographics_main.jpg",
                      }}
                    >
                      <a
                        href="/assets/img/portfolio/infographics/infographics_main.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/infographics/infographics_main.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb screen"
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/infographics/infographics_main2.jpg",
                      }}
                    >
                      <a
                        href="/assets/img/portfolio/infographics/infographics_main2.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/infographics/infographics_main2.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb screen"
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/infographics/infographics_main3.jpg",
                      }}
                    >
                      <a
                        href="/assets/img/portfolio/infographics/infographics_main3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/infographics/infographics_main3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb screen"
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/infographics/infographics_main4.jpg",
                      }}
                    >
                      <a
                        href="/assets/img/portfolio/infographics/infographics_main4.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/infographics/infographics_main4.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb screen"
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/infographics/infographics_main5.jpg",
                      }}
                    >
                      <a
                        href="/assets/img/portfolio/infographics/infographics_main5.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/infographics/infographics_main5.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb screen"
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/infographics/infographics_main6.jpg",
                      }}
                    >
                      <a
                        href="/assets/img/portfolio/infographics/infographics_main6.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/infographics/infographics_main6.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="tab-pane fade" id="nav-step3" role="tabpanel">
              <div className="row gy-30 gx-30 masonary-active">
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img src="/assets/img/service/graphic-3.jpg" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img src="/assets/img/service/graphic-3.jpg" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img src="/assets/img/service/graphic-3.jpg" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="tab-pane fade" id="nav-step4" role="tabpanel">
              <div className="row gy-30 gx-30 masonary-active">
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-step5" role="tabpanel">
              <div className="row gy-30 gx-30 masonary-active">
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="tab-pane fade" id="nav-step6" role="tabpanel">
              <div className="row gy-30 gx-30 masonary-active">
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img src="/assets/img/service/graphic-3.jpg" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img src="/assets/img/service/graphic-3.jpg" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img src="/assets/img/service/graphic-3.jpg" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="tab-pane fade" id="nav-step7" role="tabpanel">
              <div className="row gy-30 gx-30 masonary-active">
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-step8" role="tabpanel">
              <div className="row gy-30 gx-30 masonary-active">
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-step9" role="tabpanel">
              <div className="row gy-30 gx-30 masonary-active">
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div className="portfolio-box-thumb">
                      <a
                        href="/assets/img/service/graphic-3.jpg"
                        data-lightbox="portfolio"
                        data-title="Bank Management"
                      >
                        <img
                          src="/assets/img/service/graphic-3.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGraphicInner;
