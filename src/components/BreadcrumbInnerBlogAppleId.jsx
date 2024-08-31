import React from 'react'
import { Link } from 'react-router-dom'

const BreadcrumbInner = ({ title }) => {
    return (
        <div 
            className="breadcumb-wrapper"
            style={{ backgroundImage: "url(assets/img/blog/applleidforgetten.png)" }}
        >
            <div class="overlay"></div> 
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

export default BreadcrumbInner;