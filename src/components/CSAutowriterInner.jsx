import React from 'react'
import { Link } from 'react-router-dom'

const CSAutowriterInner = () => {
    return (
        <div className="portfolio-deatils-area space">
            <div className="container">
                <div className="row gx-30">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="page-thumb mb-40">
                            {/* <img src="assets/img/portfolio/project-details1-1.png" alt="img" /> */}
                            <video src='/assets/img/case-studies/autowriter/intro.mp4' autoPlay muted controls style={{ marginBottom: "20px" }} />

                            <h2 className='widget_title'>Project Overview </h2>
                            <p className="mb-30">
                            We collaborated with <strong>Marcus</strong>, who approached us with a bold idea: to create a platform that simplifies content creation through advanced AI technology. After understanding his requirements, our team developed a fully functional <strong>Bubble application and website</strong> to bring his vision to life.
                        </p>
                            
                            <p className="mb-30">
                            The project aimed to deliver user-friendly interfaces, seamless integration of AI features, and reliability—all in one innovative package.  
                        </p>
                        </div>
                    </div>
                    <div className="col-12 order-lg-3">
                    
                    <div>
                    <h2 className='widget_title'>Project Timeline </h2>
                    <p className="mb-30">We have started this project on November 17th 2023 and Complete in December 20th 2024 with successful operations of the App.
                    </p>
                    </div >
                    
                    <div className="row gy-4">
                            <div className="col-md-4">
                                <div className="page-thumb style2">
                                    <img
                                        src="/assets/img/case-studies/autowriter/Describe.gif"
                                        alt="img"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="page-thumb style2">
                                    <img
                                        src="/assets/img/case-studies/autowriter/Research.gif"
                                        alt="img"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="page-thumb style2">
                                    <img
                                        src="/assets/img/case-studies/autowriter/uxdemo.gif"
                                        alt="img"
                                    />
                                    
                                </div>
                            </div>
                        </div>

                        <p className="mb-30" style={{ marginTop: "20px" }}>
                        <strong>AutoWriter.ai</strong> is a smart content generation tool powered by cutting-edge AI models, including <strong>OpenAI’s GPT-4, Anthropic</strong>, and <strong>Google’s language systems</strong>. It produces high-quality, plagiarism-free, and <strong>SEO-optimized
                        </strong> content, catering to blogs, advertisements, emails, and website copy.  

                        By leveraging the latest in AI technology, AutoWriter.ai ensures every piece of content is tailored to the user's goals, blending brand-specific details and modern search trends for impactful results.  

                        </p>
                        
                        <div>
                        <h2 className='widget_title'>User Flow </h2>
                        <div className="checklist style2">
                                    <ul>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            App Entry Point
                                        </li>
                                        </ul>
                                        <p>Users enter the app via an interactive and accessible interface.  </p>
                                    <ul>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Sign-Up Process 
                                        </li>
                                        </ul>
                                        <p>A hassle-free and secure registration experience.   </p>
                                    <ul>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Features Exploration of the App
                                        </li>
                                        </ul>
                                        <p>Users navigate intuitive functionalities, including generating, refining, and optimizing content.  </p>
                                    <ul>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Utilization of AI Models
                                        </li>
                                        </ul>
                                        <p>Each user leverages the AI to produce personalized and dynamic outputs that meet their unique needs.   </p>
                        </div>
                        </div>

                        {/* <div className="row gy-3">
                            <div className="col-lg-6">
                                <div className="checklist style2">
                                    <ul>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Navigate the Path to Success Achieve
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />A business consultant is
                                            a professional{" "}
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Guidance to businesses on various aspects
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Strategy, and growth They help businesses
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="checklist style2">
                                    <ul>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Confidence Maximizing Profitability Through
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Advice and guidance to businesses on various
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Management, operations, strategy, and growth businesses
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            Develop solutions, and improve overall performance
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                       
                        {/* <div className="row gy-4">
                            <div className="col-md-4">
                                <div className="page-thumb style2">
                                    <img
                                        src="/assets/img/portfolio/project-details1-2.png"
                                        alt="img"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="page-thumb style2">
                                    <img
                                        src="/assets/img/portfolio/project-details1-3.png"
                                        alt="img"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="page-thumb style2">
                                    <img
                                        src="/assets/img/portfolio/project-details1-4.png"
                                        alt="img"
                                    />
                                </div>
                            </div>
                        </div> */}

                    <div style={{ marginTop: "50px" }}>
                    <h2 className='widget_title'>The Challenge </h2>
                    <p className="mb-30">During development, we encountered a major technical challenge: reducing the response time of AI-generated content from <strong>40 seconds</strong> to just <strong>3 seconds</strong>.  This was crucial for ensuring a smooth user experience. Through swift problem-solving and the expertise of our technical team, we successfully optimized the application in just a few hours, achieving the desired response time and enhancing overall user satisfaction.  
                    Our team worked tirelessly to optimize the application, implementing advanced caching techniques and optimizing API calls.
                    </p>
                    </div >

                


                    <div className="row gy-4">
                            <div className="col-md-6">
                                <div className="page-thumb style2">
                                <h2 className='widget_title'>Before</h2>
                                <video src='/assets/img/case-studies/autowriter/before.mp4' autoPlay muted loop />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="page-thumb style2">
                                <h2 className='widget_title'>After</h2>
                                <video src='/assets/img/case-studies/autowriter/after.mp4' autoPlay muted loop />
                                </div>
                            </div>
                            {/* <div className="col-md-4">
                                <div className="page-thumb style2">
                                    <img
                                        src="/assets/img/portfolio/project-details1-4.png"
                                        alt="img"
                                    />
                                </div>
                            </div> */}
                        </div>

                        {/* <p className="mt-40 mb-20">
                            Web designing in a powerful way of just not an only professions,
                            however, in a passin Company. have a to a tendency to believe the idea
                            that smart looking of any website is the impression on visitors.Web
                            designing in a powerful way only professions Web designing
                        </p>
                        <p className="mb-n1">
                            Web designing in a powerful way of just not an only professions,
                            however, in a passin Company. have a to a tendency to believe the idea
                            that smart looking of any website is the impression on visitors.Web
                            designing in a powerful way only professions Web designing in a
                            powerful way of just not an only professions, however, in a passion
                            Company. have a to a tendency to believe
                        </p> */}

                    <div style={{ marginTop: "50px" }}>
                    <h2 className='widget_title'>Design Thinking Process </h2>
                    <p className="mb-30">During development, we encountered a major technical challenge: reducing the response time of AI-generated content from <strong>40 seconds</strong> to just <strong>3 seconds</strong>.  This was crucial for ensuring a smooth user experience. Through swift problem-solving and the expertise of our technical team, we successfully optimized the application in just a few hours, achieving the desired response time and enhancing overall user satisfaction.  
                    Our team worked tirelessly to optimize the application, implementing advanced caching techniques and optimizing API calls.
                    </p>
                    </div >



                    </div>




                    <div className="col-xxl-4 col-lg-5 order-lg-2">
                        <aside className="sidebar-area">
                            <div className="widget widget_project-info">
                                <h3 className="widget_title">About the Company: 
                                </h3>
                                <p className="widget-text">
                                Marcus, the visionary founder and CEO of AutoWriter, The company has focused on empowering individuals and businesses through AI-driven content solutions.
                                </p>
                                <ul>
                                    <li>
                                        <strong>Category: </strong>
                                        <span>Artificial Intelligence</span>
                                    </li>
                                    <li>
                                        <strong>Client: </strong>
                                        <span>Marcus Slater</span>
                                    </li>
                                    <li>
                                        <strong>Company: </strong>
                                        <span>Slater Digital LLC</span>
                                    </li>
                                    <li>
                                        <strong>Client Location: </strong>
                                        <span>Gallatin, United States</span>
                                    </li>
                                    <li>
                                        <strong>Start Date:</strong>
                                        <span>17th-Nov-2023</span>
                                    </li>
                                    <li>
                                        <strong> End Date: </strong>
                                        <span>20th-Dec-2023</span>
                                    </li>
                                    <li>
                                        <strong>Rating: </strong>
                                        <span>
                                            <span className="star-ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="social-btn style5 justify-content-center">
                                <Link to="#" tabIndex={-1}>
                                    <i className="fab fa-linkedin-in" />
                                </Link>
                                <Link to="#" tabIndex={-1}>
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                <Link to="#" tabIndex={-1}>
                                    <i className="fab fa-instagram" />
                                </Link>
                                <Link to="#" tabIndex={-1}>
                                    <i className="fab fa-twitter" />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CSAutowriterInner