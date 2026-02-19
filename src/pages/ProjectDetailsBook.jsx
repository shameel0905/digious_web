import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerPortfolioBook from "../components/BreadcrumbInnerPortfolioBook";
import PortfolioBookInner from "../components/PortfolioBookInner";
import BookportfolioHelmet from "../elements/BookportfolioHelmet";
import HeroSection from "../components/HeroSection";



const ProjectDetailsBook = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <BookportfolioHelmet title={"Project Details of Book"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerPortfolioBook title="Projects of Book" />

      {/* PortfolioDetailsArea */}
      <PortfolioBookInner />
    {/* <div className="space"><HeroSection/></div> */}


      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default ProjectDetailsBook;
