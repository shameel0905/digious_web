import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ title }) => {
    return (
        <div className="breadcumb-wrapper" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background Video */}
        <video 
            src="/assets/img/bg/headbanner.mp4" 
            autoPlay 
            muted 
            loop 
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                
            }}
        />
            {/* bg animated image/ */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 ">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title text-center">{title}</h1>
                            <ul className="breadcumb-menu text-center">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="active">{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Breadcrumb;