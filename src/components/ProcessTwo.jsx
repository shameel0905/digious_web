import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProcessTwo = () => {
    useEffect(() => { Aos.init()});
    return (
        <section className='bg-dark2'>
            <div className="process-area-2 space-bottom">
                <div className="container">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-lg-6">
                            <div className="title-area">
                                <span data-aos="fade-up" data-aos-delay="600" className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    Work Process
                                </span>
                                <h2 data-aos="fade-up" data-aos-delay="700" className="sec-title style2 text-white">
                                    Unleash Business's Hid Potential
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p data-aos="fade-up" data-aos-delay="600" className="mb-60 sec-text text-white mt-0">
                                Lorem Ipsum is simply dummy a of the printing and type setting
                                industry Loreaim Ipsum has been the industry's standard dummy.
                            </p>
                        </div>
                    </div>
                    <div className="row gy-30">
                        <div data-aos="fade-left" data-aos-offset="200" data-aos-delay="500" className="col-lg-6 col-xl-3 process-card-wrap2">
                            <div className="process-card style2">
                                <h3 className="process-card_number">01</h3>
                                <div className="process-card_content">
                                    <span className="process-card-text">Technical Operation</span>
                                    <h4 className="process-card-title"> Growth Acceler</h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-offset="200" data-aos-delay="500" className="col-lg-6 col-xl-3 process-card-wrap2">
                            <div className="process-card style2">
                                <h3 className="process-card_number">02</h3>
                                <div className="process-card_content">
                                    <span className="process-card-text">Technical Operation</span>
                                    <h4 className="process-card-title"> Growth Acceler</h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="500" className="col-lg-6 col-xl-3 process-card-wrap2">
                            <div className="process-card style2">
                                <h3 className="process-card_number">03</h3>
                                <div className="process-card_content">
                                    <span className="process-card-text">Technical Operation</span>
                                    <h4 className="process-card-title"> Growth Acceler</h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="500" className="col-lg-6 col-xl-3 process-card-wrap2">
                            <div className="process-card style2">
                                <h3 className="process-card_number">04</h3>
                                <div className="process-card_content">
                                    <span className="process-card-text">Technical Operation</span>
                                    <h4 className="process-card-title"> Growth Acceler</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProcessTwo