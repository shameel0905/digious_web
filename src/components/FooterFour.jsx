import React, {useEffect, useRef    } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
const FooterFour = () => {

  useEffect(() => {
    // Initialize AOS
    Aos.init();
  }, []);

    return (
        <section className='bg-dark'>
            <footer className="footer-wrapper footer-layout4 footer_resp"
                style={{ backgroundImage: "url(/assets/img/bg/footer-bg4-1.png)" }}
            >
                <div className="container">
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-5">
                                <div className="widget footer-widget widget-about">
                                    <div className="about-logo">
                                        <Link to="/">
                                            <img src="/assets/img/logo-white.svg" alt="digious" />
                                        </Link>
                                    </div>
                                    <p className="footer-text mb-30 mt-30">
                                        At Digious Solutions, we drive your success through
                                        innovative solutions. Contact us today to elevate your
                                        business to the next level.
                                    </p>
                                    <div className="social-btn">
                                        <Link to="https://www.facebook.com/Digious/ " tabIndex={-1}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="https://twitter.com/digioustweets" tabIndex={-1}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to="https://www.instagram.com/digiousposts/" tabIndex={-1}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link to="https://www.linkedin.com/company/digious-solutions/" tabIndex={-1}>
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Services</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li>
                                                <Link to="/ecommerce-solutions">E-Commerce Solution</Link>
                                            </li>
                                            <li>
                                                <Link to="/mobile-app-development">Mobile App Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/website-development">Website Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/block-chain-portfolio">Non Fungible Tokens (NFTs)</Link>
                                            </li>
                                            <li>
                                                <Link to="/digital-marketing">Digital Marketing</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Contact</h3>
                                    <div className="widget-contact2">
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-phone-alt text-white" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    <Link to="tel:+19133745577">(913)374-5577</Link>
                                                    <p/>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-phone-alt text-white" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    <Link to="https://api.whatsapp.com/send?phone=61431066995">(614)310-66995</Link>
                                                    <p/>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-envelope text-white" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    <Link to="mailto:info@digiuossolutions.com">info@digiuossolutions.com</Link>
                                                    <p />
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-map-marker-alt text-white" />
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
                                    © <Link to="#">Digious Solutions </Link> 2024 | All Rights Reserved
                                </p>
                            </div>
                            <div className="col-auto">
                                <div className="footer-links">
                                    <Link to="/">Terms &amp; Condition</Link>
                                    <Link to="/">Privacy Policy</Link>
                                    <Link to="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </section>
    )
}

export default FooterFour