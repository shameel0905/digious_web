import React from 'react'
import Marquee from "react-fast-marquee";
const MarqueeFour = () => {
    return (
        <section className='bg-dark2'>
            <div className="marquee-area">
                <div className="container-fluid p-0 overflow-hidden">
                    <div className="slider__marquee style2">
                        <div className="marquee_mode">
                            <Marquee speed={100}>
                                <div className="item">

                                    <img src="/assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                                    <span>Vision</span>

                                </div>
                                <div className="item">

                                    <img src="/assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                                    <span>Passion</span>

                                </div>
                                <div className="item">

                                    <img src="/assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                                    <span>Trust</span>

                                </div>
                                <div className="item">
                                    <img src="/assets/img/icon/marquee-icon-1-3.svg" alt="img" />
                                    <span>Digitally Outstanding </span>
                                </div>
                                <div className="item">
                                    <img src="/assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                                    <span>#WeAreDigious </span>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MarqueeFour