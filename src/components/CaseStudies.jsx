import React from 'react'
import { Link } from 'react-router-dom'

const CaseStudies = () => {
    return (
        <div className="portfolio-area-1 space">
            <div className="container">
                <div className="row gx-30 gy-60">
                    <div className="col-lg-6">
                        <div className="portfolio-card">
                            <Link to="/project-details">
                            <div className="portfolio-card-thumb">
                                <img src="assets/img/case-studies/autowriter/cover.jpg" alt="img" />
                            </div>
                            <div className="portfolio-card-details">
                                <div className="media-left">
                                    <span className="portfolio-card-details_subtitle">
                                        Ai Content Writing
                                    </span>
                                    <h4 className="portfolio-card-details_title">
                                        <Link to="/project-details">
                                        Autowriter | Smartest and Easiest Way to Write Content
                                        </Link>
                                    </h4>
                                </div>
                                <Link to="/project-details" className="icon-btn">
                                    <img src="assets/img/icon/arrow-up-right.svg" alt="Digious Solutions" />
                                </Link>
                            </div>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="portfolio-card">
                            <Link to="/project-details">
                            <div className="portfolio-card-thumb">
                                <img src="assets/img/portfolio/1-5.png" alt="img" />
                            </div>
                            <div className="portfolio-card-details">
                                <div className="media-left">
                                    <span className="portfolio-card-details_subtitle">
                                        Development Coaches
                                    </span>
                                    <h4 className="portfolio-card-details_title">
                                        <Link to="/project-details">
                                            Digital Transformation Advisors
                                        </Link>
                                    </h4>
                                </div>
                                <Link to="/project-details" className="icon-btn">
                                    <img src="assets/img/icon/arrow-up-right.svg" alt="Digious Solutions" />
                                </Link>
                            </div>
                            </Link>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default CaseStudies