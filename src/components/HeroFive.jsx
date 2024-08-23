import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroFive = () => {
    useEffect(() => { Aos.init()});

    return (
        <section className='bg-dark2'>
            <div
                className="hero-wrapper hero-5"
                id="hero"
                style={{ backgroundImage: "url(assets/img/hero/hero_bg_5_1.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="hero-style5 text-center">
                                <h1 data-aos="fade-up" data-aos-delay="700" className="hero-title text-white">
                                Modernizing the Unique IT  
                                    <span className="text-theme2"> Business </span> Sphere
                                </h1>
                                <p data-aos="fade-up" data-aos-delay="800"  className="hero-text text-white">
                                As a service provider, we deliver specialist advice and strategic guidance on various unique aspects within the IT realm.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="hero-thumb5-1">
                                <img data-aos="zoom-out-up" data-aos-offset="400" data-aos-duration="400" src="assets/img/hero/hero_thumb_5_1.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroFive;
