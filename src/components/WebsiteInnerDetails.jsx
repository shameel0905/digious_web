import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import Aos from "aos";
import "aos/dist/aos.css";

const WebsiteInnerDetails = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section className="space">
        <div className="container">
          <div className="row gx-30">
            <div className="col-xxl-12 col-lg-12">
              <div className="service-details-content">
                <h3 className="text-white page-title mt-40 mb-20">
                Digious Solutions is a top web development agency providing exceptional and innovative website design services.
                </h3>
              </div>
              <p>
              Digious Solutions serves as a Website Development Agency believing in the vision of creativity. It fills as your premier Web Developer and Web Designer. We are here to prepare a dominant aesthetic for your website and provide you exclusive services within your duration, direction, and reserve. We specialize in providing professional web designing services and quality and eco-effective solutions to our clients as per their requirements, making your network interactional. Our efficient team members support you in building a website of your choice and providing you with more responsive and adaptive designs. We do consider our tasks and practice them efficiently. A well-designed web is easy to use, for which our designer’s foremost duty is to practice on appearance, colors, content, fonts, and images used. The design of your website impacts user’s interests; consequently, your web should be designed up to the record for targeting the audience. 
              </p>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Custom websites tailored to your unique business needs.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />A business Responsive designs for seamless user experiences across all devices.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Fast development with top-notch quality and support.
                  </li>
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
              Enhance Your Online Presence with Digious Solutions: Premier E-Commerce and Web Development Services
              </h3>
              <p className="mb-30">
              We are here to provide you high-quality display by making our digital experiences to life. We aim to gain the favour of our clients through our deliberate efforts. We help in developing and designing your websites and applications for the internet and intranet. With us, boost up your business, and measure the prime. Suppose you are looking for a more efficient and creative company for getting E-Commerce Development services or are eager to launch a new online store or upgrade your existing one. Digious Solutions is here to create and customize your existing website and provide you with the best E-Commerce web services. We offer easy reach to our regular audience by providing increased inaccessibility personally, as E-commerce Web Developer entitles you to manage your products, customers, orders, and payments through online marketing sources.
              </p>
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="page-thumb style2"
                  >
                    <video   
                       src="/assets/videos/services/website/showcase1.mp4"   
                       autoPlay   
                       loop   
                       muted   
                       playsInline  
                       style={{ width: '100%', height: 'auto' }}  
                       alt="E-Commerce Solutions"  
                       > Your browser does not support the video tag.
                      </video> 
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="page-thumb style2"
                  >
                    <video   
                       src="/assets/videos/services/website/showcase2.mp4"   
                       autoPlay   
                       loop   
                       muted   
                       playsInline  
                       style={{ width: '100%', height: 'auto' }}  
                       alt="E-Commerce Solutions"  
                       > Your browser does not support the video tag.
                      </video> 
                  </div>
                </div>
              </div>
              <p className="mt-30 mb-n1">
              We begin with an intensive brainstorming session to outline the initial concepts. Then we proceed to sketch out a rough wireframe to shape the project's structure. Afterward, we focus on crafting an engaging and functional front-end. Finally, we develop a solid backend to ensure the system's performance and reliability.
              </p>
            </div>
            {/* <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_categories widget_service-categories">
                                <ul>
                                    <li>
                                        <Link to="/service">Personal service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Education service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Student service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Wedding service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Car service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Business service</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Others service</Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div> */}
          </div>
        </div>
      </section>

      {/* Section of portfolio starts from here */}

      <div className="portfolio-area-3 space">
        <div className="container">
          <div className="row justify-content-center align-items-end">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className="col-xl-6">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="/assets/img/icon/title_left.svg" alt="shape" />
                  Our Portfolio
                </span>
                <h2 className="sec-title style2">
                Latest Projects of Web Development
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-30 gy-30">
            <div data-aos="fade-up" data-aos-delay="600" className="col-lg-6">
            <Link to="/case-studies/autowriter">
              <div className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="/assets/img/case-studies/autowriter/cover.jpg" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <span className="portfolio-card-details_subtitle">
                    Artificial Intelligence
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/case-studies/autowriter">
                    Autowriter | Smartest and Easiest Way to Write Content
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                  AutoWriter.ai is a smart content generation tool powered by cutting-edge AI models, including OpenAI’s GPT-4, Anthropic, and Google’s language systems.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            {/* <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-delay="700" className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="/assets/img/service/graphic-4.jpg" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <span className="portfolio-card-details_subtitle">
                    Experience
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/">
                      Your Business Goals with the Confidence
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    We have been operating for over a decade, providing
                    top-notch services to our clients and building
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
         </div>
    </>
  );
};

export default WebsiteInnerDetails;
