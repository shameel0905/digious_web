import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
    
const ServiceFive = () => {
    useEffect(() => { Aos.init()});
    return (
        <section className='bg-dark2'>
            <div className="service-area-4 space-top position-relative">
                <div className="shadow-shape-right" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="title-area text-center">
                                <span data-aos="fade-up" data-aos-offset="400" data-aos-delay="400" className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    Our Services
                                </span>
                                <h2 data-aos="fade-up" data-aos-offset="400" data-aos-delay="500" className="sec-title style2 text-white">
                                Accomplishing Your Tech Goals with Absolute Assurance
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gx-30 gy-30 justify-content-center">
                        <div data-aos="fade-up" data-aos-offset="400" data-aos-delay="400" className="col-xl-4 col-md-6">
                            <div className="service-card-4">
                                <div className="service-card-thumb">
                                    <img src="assets/img/service/web-development.jpg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">Web Development</Link>
                                    </h4>
                                    <p className="service-card_text">
                                    Providing cutting-edge web development solutions to elevate your business's online presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-offset="400" data-aos-delay="600" className="col-xl-4 col-md-6">
                            <div className="service-card-4">
                                <div className="service-card-thumb">
                                    <img src="assets/img/service/graphic-design.jpg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">Graphic Designing</Link>
                                    </h4>
                                    <p className="service-card_text">
                                    Delivering exceptional graphic design services to enhance your brand's visual identity.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-offset="400" data-aos-delay="800" className="col-xl-4 col-md-6">
                            <div className="service-card-4">
                                <div className="service-card-thumb">
                                    <img src="assets/img/service/digital-marketing.jpg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">Digital Marketing</Link>
                                    </h4>
                                    <p className="service-card_text">
                                    Offering strategic digital marketing services to boost your brand's online visibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ServiceFive