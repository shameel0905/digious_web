import React from "react";

const PortfolioWebsiteInner = () => {
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
              Latest Projects of Website Development{" "}
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
              Full Stack Development
            </button>
            <button
              className="nav-link"
              id="nav-step2-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-step2"
              type="button"
            >
              No Code Development
            </button>
           
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade active show" id="nav-step1" role="tabpanel" >
              <div className="row gy-30 gx-30 masonary-active">
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/website/website1.png)",
                      }}
                      className="portfolio-box-thumb screen"
                    >
                      <a
                        href="/assets/img/portfolio/website/website1.png"
                        data-lightbox="portfolio"
                        data-title="Drone Drop"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/website/website1.png"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/website/website2.png)",
                      }}
                      className="portfolio-box-thumb screen"
                    >
                      <a
                        href="/assets/img/portfolio/website/website2.png"
                        data-lightbox="portfolio"
                        data-title="Boxers"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/website/website2.png"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/website/website3.png)",
                      }}
                      className="portfolio-box-thumb screen"
                    >
                      <a
                        href="/assets/img/portfolio/website/website3.png"
                        data-lightbox="portfolio"
                        data-title="Tralog"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/website/website3.png"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/website/website4.png)",
                      }}
                      className="portfolio-box-thumb screen"
                    >
                      <a
                        href="/assets/img/portfolio/website/website4.png"
                        data-lightbox="portfolio"
                        data-title="Birdly"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/website/website4.png"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/website/website5.png)",
                      }}
                      className="portfolio-box-thumb screen"
                    >
                      <a
                        href="/assets/img/portfolio/website/website5.png"
                        data-lightbox="portfolio"
                        data-title="Woprio"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/website/website5.png"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      style={{
                        backgroundImage:
                          "url(/assets/img/portfolio/website/website6.png)",
                      }}
                      className="portfolio-box-thumb screen"
                    >
                      <a
                        href="/assets/img/portfolio/website/website6.png"
                        data-lightbox="portfolio"
                        data-title="Kettle Klo"
                      >
                        <img
                          className="invisible"
                          src="/assets/img/portfolio/website/website6.png"
                          alt="img"
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
                      className="portfolio-box-thumb"
                    >
                      <a
                        href="/assets/img/portfolio/website/webapps/webapp1.jpg"
                        data-lightbox="portfolio"
                        data-title=""
                      >
                        <img
                            src="/assets/img/portfolio/website/webapps/webapp1.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb"
                    >
                      <a
                        href="/assets/img/portfolio/website/webapps/webapp2.png"
                        data-lightbox="portfolio"
                        data-title=""
                      >
                        <img
                            src="/assets/img/portfolio/website/webapps/webapp2.png"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb"
                    >
                      <a
                        href="/assets/img/portfolio/website/webapps/webapp3.png"
                        data-lightbox="portfolio"
                        data-title=""
                      >
                        <img
                            src="/assets/img/portfolio/website/webapps/webapp3.png"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb"
                    >
                      <a
                        href="/assets/img/portfolio/website/webapps/webapp4.png"
                        data-lightbox="portfolio"
                        data-title=""
                      >
                        <img
                            src="/assets/img/portfolio/website/webapps/webapp4.png"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb"
                    >
                      <a
                        href="/assets/img/portfolio/website/webapps/webapp5.png"
                        data-lightbox="portfolio"
                        data-title=""
                      >
                        <img
                            src="/assets/img/portfolio/website/webapps/webapp5.png"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter-item">
                  <div className="portfolio-box">
                    <div
                      className="portfolio-box-thumb"
                    >
                      <a
                        href="/assets/img/portfolio/website/webapps/webapp6.png"
                        data-lightbox="portfolio"
                        data-title=""
                      >
                        <img
                            src="/assets/img/portfolio/website/webapps/webapp6.png"
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

export default PortfolioWebsiteInner;
