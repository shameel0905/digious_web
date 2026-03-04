import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ProcessTwo from './ProcessTwo'

import Aos from "aos";
import "aos/dist/aos.css";

const EbookInnerDetails = () => {
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
                  Ebook Writing Services by Professional eBook Writers
                </h3>
              </div>
              <p>
                Our eBook writing services are designed to help authors, entrepreneurs, and businesses create high quality eBooks that rank, convert, and build authority. If you are looking to hire eBook writers who understand content structure, search intent, and audience engagement, our professional eBook writing company delivers results driven content tailored to your niche.
              </p>
              <p>We provide <Link to="/book-portfolio">custom eBook writing services</Link> that focus on originality, research, and readability. Every eBook is written with a clear purpose whether it is lead generation, brand authority, self publishing, or digital marketing growth.</p>
              <div className="service-details-content">
                <h3 className="text-white page-title mt-40 mb-20">
                  Our Simple 6-Step Process
                </h3>
              </div>
              <div className="checklist style6 mt-40 mb-60">
                <ul>
                  <li>
                    <i className="fas fa-check-circle" />
                    Make Your Purchase:
                  </li>
                  <p>Contact our customer care to be connected with a project manager and begin your journey.</p>
                  <li>
                    <i className="fas fa-check-circle" />Approval of First Chapter:
                  </li>
                  <p>We’ll create an outline based on your ideas and start writing for your approval.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Revisions and Feedback:
                  </li>
                  <p>We incorporate your feedback and make necessary revisions to refine the chapters.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Proofreading and Editing:
                  </li>
                  <p>Our editing and proofreading services will perfect your manuscript, ensuring it’s polished and professional.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Final Creative Touches:
                  </li>
                  <p>We design a captivating book cover and format your book to international standards.</p>
                  <li>
                    <i className="fas fa-check-circle" />
                    Publication and Promotion:
                  </li>
                  <p>Once your book is ready, our expert marketing team will promote it, ensuring your work gets the attention it deserves.</p>
                  {/* <li>
                    <i className="fas fa-check-circle" />
                    Software Maintenance & Support:
                  </li>
                  <p>Keep your software up-to-date, secure, and performing at its best with ongoing maintenance and feature updates.</p> */}
                </ul>
              </div>
              <h3 className="text-white page-title mb-20">
                Professional eBook Writing Services That Deliver Resultss
              </h3>
              <p className="mb-20">
                Choosing the right eBook writing services is critical for success. Our professional eBook writers combine industry knowledge with SEO focused writing to ensure your eBook performs well online and appeals to readers.
              </p>
              <p className="mb-30"> We work closely with clients to understand goals, audience behavior, and publishing platforms. This allows us to create eBooks that are informative, engaging, and optimized for visibility.</p>
              <h3 className="text-white page-title mb-20">
                Custom eBook Writing Services for Every Industry
              </h3>
              <p className="mb-30">
                Our custom eBook writing services are built around your topic, target audience, and business objectives. We do not use templates or recycled content. Each eBook is written from scratch to ensure uniqueness and authority.
              </p>
              <p className="mt-30 mb-40">
                We specialize in business eBook writing, self help eBook writing, marketing eBook writing, real estate eBooks, finance eBooks, health and wellness eBooks, and technology focused eBooks. Our writers adapt tone and style based on your niche, ensuring relevance and reader trust.
              </p>
              <h3 className="text-white page-title mb-20">
                eBook Ghostwriting Services With Full Ownership
              </h3>
              <p className="mb-30">
                Our eBook ghostwriting services are ideal for professionals who want to publish under their own name. We carefully capture your voice and messaging so the eBook feels authentic and personal.
              </p>
              <p className="mt-30 mb-40">
                When you hire an eBook ghostwriter from our team, you receive full ownership rights, complete confidentiality, and content ready for self publishing platforms such as Amazon Kindle and other digital stores.
              </p>
              <h3 className="text-white page-title mb-20">
                Non Fiction and Fiction eBook Writing Services
              </h3>
              <p className="mb-30">
                Our non fiction eBook writing services focus on clarity, research accuracy, and actionable insights. These eBooks are ideal for thought leadership, education, and business growth.
              </p>
              <p className="mt-30 mb-40">
                For creative projects, our fiction eBook writing services focus on storytelling, character development, and pacing. We help authors create engaging fiction eBooks that keep readers invested from beginning to end.
              </p>
              <h3 className="text-white page-title mb-20">
                eBook Editing and Proofreading Services
              </h3>
              <p className="mb-30">
                In addition to writing, we offer professional eBook editing services to improve structure, grammar, flow, and consistency. This ensures your eBook meets publishing standards and maintains a professional tone throughout.
              </p>
              <p className="mt-30 mb-40">
                Whether you need light proofreading or full developmental editing, our eBook editing solutions enhance quality and readability.
              </p>
              <h3 className="text-white page-title mb-20">
                eBook Writing Services With Flexible Pricing
              </h3>
              <p className="mb-30">
                We provide affordable eBook writing services based on word count, research level, and project scope. Whether you need a short eBook for lead generation or a full length manuscript for publishing, our pricing is transparent and competitive.
              </p>
              <p className="mt-30 mb-40">
                Our goal is to make professional eBook writing accessible without sacrificing quality or performance.
              </p>
              <h3 className="text-white page-title mb-20">
                Hire eBook Writers Who Understand Your Goals
              </h3>
              <p className="mb-30">
                When you hire eBook writers from our team, you gain access to experienced professionals who understand audience psychology, content flow, and SEO best practices.
              </p>
              <p className="mt-30 mb-40">
                We manage the entire eBook writing process from research and outlining to writing, editing, and final delivery. This ensures consistency, accuracy, and timely completion.
              </p>
              <h3 className="text-white page-title mb-20">
                eBook Writing Company Trusted by Authors and Businesses
              </h3>
              <p className="mb-30">
                As a trusted eBook writing company, we focus on long term value rather than quick content. Our eBooks are written to support authority building, lead generation, and publishing success.
              </p>
              <p className="mt-30 mb-40">
                Clients choose our eBook writing services because we prioritize quality, confidentiality, and measurable results.
              </p>
              <h3 className="text-white page-title mb-20">
                Get Started With eBook Writing Services Today
              </h3>
              <p className="mb-30">
                If you are searching for professional eBook writing services that help your page rank and convert, we are ready to help. Our expert eBook writers can turn your ideas into a powerful digital book that supports your business or personal brand.
              </p>
              <p className="mt-30 mb-40">
                <Link to="/contact">
                  Contact us today to hire an eBook writer
                </Link> and start creating an eBook that delivers visibility, credibility, and growth.
              </p>
              {/* <div className="row gy-4">
                <div className="col-lg-6">
                  <div
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="page-thumb style2"
                  >
                    <video
                      src="/assets/videos/services/software/showcase1.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: 'auto' }}
                      alt="Software Development"
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
                      src="/assets/videos/services/software/showcase2.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: 'auto' }}
                      alt="Software Development"
                    > Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div> */}

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
                  Latest Projects of E-Book
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-30 gy-30">
            <div data-aos="fade-up" data-aos-delay="600" className="col-lg-6">
              <div className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="/assets/img/portfolio/Ebook/ebook-cover-7.jpg" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <Link to="/book-portfolio"> 
                  <span className="portfolio-card-details_subtitle">                  
                   Experience
                  </span>
                  </Link>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/book-portfolio">
                      Professional E Book Design and Publishing
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    We design professional e books that improve readability, branding, and digital publishing across multiple platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-delay="700" className="portfolio-card-3">
                <div className="portfolio-card-thumb">
                  <img src="/assets/img/portfolio/Ebook/ebook-cover-1.jpg" alt="img" />
                </div>
                <div className="portfolio-card-details">
                  <Link to="/book-portfolio"> 
                  <span className="portfolio-card-details_subtitle">                  
                   Experience
                  </span>
                  </Link>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/book-portfolio">
                      Custom E Book Creation for Authors and Brands
                    </Link>
                  </h4>
                  <p className="portfolio-card-details_text">
                    Our e book services include formatting, design, and optimization to reach readers and build authority online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EbookInnerDetails;
