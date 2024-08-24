import React from 'react'
import { Link } from 'react-router-dom'

const ContactInner = () => {
    return (
        <>
            
            <div className="contact-area space">
                <div className="container">
                    <div className="contact-page-wrap bg-theme">
                        <div className="row gy-40 align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="fas fa-phone-alt" />
                                    </div>
                                    <div className="contact-info_details">
                                        <h6 className="contact-info_title">Phone</h6>
                                        <p className="contact-info_text">
                                            <span ><a href="tel:+19133745577">US: (913)374-5577</a></span> <br />
                                            <span ><a href="https://api.whatsapp.com/send?phone=61431066995">Whatsapp: (614)310-66995</a></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <div className="contact-info_details">
                                        <h6 className="contact-info_title">Location</h6>
                                        <p className="contact-info_text">
                                        19 Kimian Avenue West Waratah, <br /> New South Wales Australia
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="fas fa-envelope" />
                                    </div>
                                    <div className="contact-info_details">
                                        <h6 className="contact-info_title">Email</h6>
                                        <p className="contact-info_text">
                                            <span>info@digiuossolutions.com</span> 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-bottom">
                <div className="container">
                    <div className="row gy-40 justify-content-between">
                        <div className="col-lg-4">
                            <div className="title-area mb-0">
                                <span className="sub-title">
                                    <img src="assets/img/icon/title_left.svg" alt="shape" />
                                    Contact Us
                                </span>
                                <h2 className="sec-title style2">Get In Touch</h2>
                                <p className="mb-40">
                                Got questions? Let's connect. Explore how our expertise can benefit you.{" "}
                                </p>
                                <div className="social-btn style4">
                                    <Link to="https://www.facebook.com/Digious" tabIndex={-1}>
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link to="https://www.linkedin.com/company/digious-solutions/" tabIndex={-1}>
                                        <i className="fab fa-linkedin-in" />
                                    </Link>
                                    <Link to="https://twitter.com/digioustweets" tabIndex={-1}>
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link to="https://www.instagram.com/digiousposts/" tabIndex={-1}>
                                        <i className="fab fa-instagram" />
                                    </Link>
                                    <Link to="https://github.com/digious-solutions" tabIndex={-1}>
                                        <i className="fab fa-github" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8">
                            <div className="contact-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="form-control style-border"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Email"
                                            className="form-control style-border"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            className="form-control style-border"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <select
                                            name="subject"
                                            id="subject"
                                            className="form-select style-border"
                                        >
                                            <option defaultValue={1}>
                                                Subject
                                            </option>
                                            <option value={1}>Subject 01</option>
                                            <option value={2}>Subject 02</option>
                                            <option value={3}>Subject 03</option>
                                        </select>
                                        <i className="fas fa-angle-down" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea
                                            placeholder="Message here.."
                                            className="form-control style-border"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="global-btn w-100">
                                            Send Now
                                            <img src="assets/img/icon/right-icon.svg" alt="Bizmaster" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-bottom">
            <div className="map-sec">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.0247201482193!2d151.70807087643044!3d-32.89751466941009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b73159894baef7f%3A0xb2f8bbdfb0c28878!2sDigious%20Solutions!5e0!3m2!1sen!2s!4v1724537314156!5m2!1sen!2s%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
                    allowFullScreen=""
                    loading="lazy"
                    title='Digious Solutions'
                />
            </div>
            </div>

        </>

    )
}

export default ContactInner