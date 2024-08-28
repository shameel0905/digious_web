import React from 'react'
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const FaqThree = () => {
    return (
        <section className='bg-dark2'>
            <section className="faq-area-5 space-top">
                <div className="container">
                    <div className="row gy-40 justify-content-center">
                        <div className="col-xxl-6 text-xxl-start text-center">
                            <div className="title-area mb-60">
                                <span data-aos="fade-up" data-aos-delay="600" className="sub-title style2">
                                    <img src="/assets/img/icon/title_left2.svg" alt="shape" />
                                    FAQs
                                </span>
                                <h2 data-aos="fade-up" data-aos-delay="700" className="sec-title style2 text-white">
                                Solutions to Your Frequent Queries
                                </h2>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="700" className="faq-thumb5">
                                <img src="/assets/img/normal/faq-thumb-5-1.png" alt="img" />
                                <div className="about-counter-wrap jump-reverse">
                                    <h3 className="about-counter">
                                        <TrackVisibility once>
                                            {({ isVisible }) =>
                                                isVisible && (
                                                    <span className="counter-number">
                                                        <CountUp delay={0} start={0} end={10} />K+
                                                    </span>
                                                )
                                            }
                                        </TrackVisibility>
                                    </h3>
                                    <p className="sec-desc">Client Review</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 align-self-end">
                            <div className="accordion-area accordion" id="faqAccordion">
                                <div className="accordion-card style5 active">
                                    <div className="accordion-header" id="collapse-item-1">
                                        <button
                                            className="accordion-button "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-1"
                                            aria-expanded="true"
                                            aria-controls="collapse-1"
                                        >
                                            What types of services do you offer?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-1"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="collapse-item-1"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                            We offer a range of IT services including web development, graphic design, digital marketing, and much more.{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-card style5">
                                    <div className="accordion-header" id="collapse-item-2">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-2"
                                            aria-expanded="false"
                                            aria-controls="collapse-2"
                                        >
                                            How long does it usually take for a project completion?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-2"
                                        className="accordion-collapse collapse "
                                        aria-labelledby="collapse-item-2"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                            The duration of the project varies depending on the complexity and the requirements. Once we understand your needs, we can provide a more accurate timeline.{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-card style5">
                                    <div className="accordion-header" id="collapse-item-3">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-3"
                                            aria-expanded="false"
                                            aria-controls="collapse-3"
                                        >
                                            What if I'm not satisfied with the provided service?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-3"
                                        className="accordion-collapse collapse "
                                        aria-labelledby="collapse-item-3"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                            Customer satisfaction is our top priority. We will work closely with you to make any necessary revisions until you are fully satisfied.{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-card style5">
                                    <div className="accordion-header" id="collapse-item-4">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse-4"
                                            aria-expanded="false"
                                            aria-controls="collapse-4"
                                        >
                                            Do you provide ongoing support post-completion of the project?
                                        </button>
                                    </div>
                                    <div
                                        id="collapse-4"
                                        className="accordion-collapse collapse "
                                        aria-labelledby="collapse-item-4"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">
                                            Yes, we offer post-completion support to ensure everything runs smoothly. The specifics will be discussed prior to project commencement.{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default FaqThree
