import React from "react";
import { Link } from "react-router-dom";

const FooterFive = () => {
  return (
    <section className="bg-dark2">
      <footer
        className="footer-wrapper footer-layout5"
        style={{ backgroundImage: "url(assets/img/bg/footer-bg5-1.png)" }}
      >
        <div className="container">
          <div className="widget-area">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-4">
                <div className="widget footer-widget widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <img src="assets/img/logo-white.svg" alt="Digious Solutions" />
                    </Link>
                  </div>
                  <p className="footer-text mb-30 mt-30">
                    At Digious Solutions, we drive your success through
                    innovative solutions. Contact us today to elevate your
                    business to the next level.
                  </p>
                  <div className="social-btn">
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/">E-Commerce Solution</Link>
                      </li>
                      <li>
                        <Link to="/">Mobile App Development</Link>
                      </li>
                      <li>
                        <Link to="/">Website Development</Link>
                      </li>
                      <li>
                        <Link to="/">Non Fungible Tokens (NFTs)</Link>
                      </li>
                      <li>
                        <Link to="/">Wordpress Development</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Our Office</h3>
                  <div className="widget-contact2">
                    <div className="widget-contact-grid">
                      <i className="fas fa-phone-alt" />
                      <div className="contact-grid-details">
                        <h6>
                          <Link to="#">(913)374-5577</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="widget-contact-grid">
                      <i className="fab fa-whatsapp" />
                      <div className="contact-grid-details">
                        <h6>
                          <Link to="#">(614)310-66995</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="widget-contact-grid">
                      <i className="fas fa-envelope" />
                      <div className="contact-grid-details">
                        <h6>
                          <Link to="#">info@digiuossolutions.com</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="widget-contact-grid">
                      <i className="fas fa-map-marker-alt" />
                      <div className="contact-grid-details">
                        <h6>
                          19 Kimian Avenue West Waratah, New South Wales
                          Australia
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright-wrap">
            <div className="row gy-3 justify-content-lg-between justify-content-center">
              <div className="col-auto align-self-center">
                <p className="copyright-text text-center">
                  © <Link to="#">Digious Solutions </Link> 2024 | All Rights
                  Reserved
                </p>
              </div>
              <div className="col-auto">
                <div className="footer-links">
                  <Link to="/">Privacy</Link>
                  <Link to="/">Terms</Link>
                  <Link to="/">Sitemap</Link>
                  <Link to="/">Help</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterFive;
