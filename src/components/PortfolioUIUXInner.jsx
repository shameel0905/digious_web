import React from "react";
import { Link } from "react-router-dom";

const PortfolioUIUXInner = () => {
  return (
    <div className="portfolio-area-1 space-top space-bottom">
        <div className="shadow-shape-right" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Latest Portfolio
                </span>
                <h2 className="sec-title style2">
                  Transform Your Business with Professional{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="goal-tabs-wrapper mainTabs_div">
            <div className="nav nav-tabs goal-tabs-tabs port_tabs" id="nav-tab" role="tablist">
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
                3D Logo
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
              <button
                className="nav-link"
                id="nav-step4-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-step4"
                type="button"
              >
                Merchandise
              </button>
              <button
                className="nav-link"
                id="nav-step5-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-step5"
                type="button"
              >
                Stationery
              </button>
              <button
                className="nav-link"
                id="nav-step6-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-step6"
                type="button"
              >
                Advertisement
              </button>
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
              <button
                className="nav-link"
                id="nav-step9-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-step9"
                type="button"
              >
                Gaming Designs
              </button>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade active show" id="nav-step1" role="tabpanel" >
                <div className="row gy-30 gx-30 masonary-active">
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-1.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Logo Design
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Logo Design</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-2.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-3.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-4.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-5.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-step2" role="tabpanel">
                <div className="row gy-30 gx-30 masonary-active">
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-1.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                          3D Logo
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-2.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-3.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-4.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-5.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-step3" role="tabpanel">
                <div className="row gy-30 gx-30 masonary-active">
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-1.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Illustration
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-2.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-3.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-4.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-5.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-step4" role="tabpanel">
                <div className="row gy-30 gx-30 masonary-active">
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-1.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Merchandise
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-2.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-3.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-4.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-5.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-step5" role="tabpanel">
                <div className="row gy-30 gx-30 masonary-active">
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-1.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Stationery
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-2.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-3.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-4.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-5.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-step6" role="tabpanel">
                <div className="row gy-30 gx-30 masonary-active">
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-1.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Advertisement
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-2.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-3.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-4.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-5.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-step7" role="tabpanel">
                <div className="row gy-30 gx-30 masonary-active">
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-1.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Book Covers
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-2.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-3.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-4.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-5.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-step8" role="tabpanel">
                <div className="row gy-30 gx-30 masonary-active">
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-1.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Music Arts
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-2.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-3.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-4.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-5.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-step9" role="tabpanel">
                <div className="row gy-30 gx-30 masonary-active">
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-1.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Gaming Designs
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-2.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-3.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-4.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto filter-item">
                    <div className="portfolio-box">
                      <div className="portfolio-box-thumb">
                        <img src="assets/img/portfolio/2-5.png" alt="img" />
                      </div>
                      <div className="portfolio-box-details">
                        <div className="media-left">
                          <span className="portfolio-box-details_subtitle">
                            Nemo enim ipsam
                          </span>
                          <h4 className="portfolio-box-details_title">
                            <Link to="/project-details">Bank Management</Link>
                          </h4>
                        </div>
                        <Link to="/project-details" className="icon-btn">
                          <img
                            src="assets/img/icon/arrow-up-right.svg"
                            alt="Bizmaster"
                          />
                        </Link>
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

export default PortfolioUIUXInner;
