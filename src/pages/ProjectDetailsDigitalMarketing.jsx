import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerPortfolioDigitalMarketing from "../components/BreadcrumbInnerPortfolioDigitalMarketing";
import PortfolioDigitalMarketingInner from "../components/PortfolioDigitalMarketingInner";
import DigiMarketingportfolioHelmet from "../elements/DigiMarketingportfolioHelmet";
import HeroSection from "../components/HeroSection";



const ProjectDetailsDigitalMarketing = () => {
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
      <DigiMarketingportfolioHelmet title={"Project Details"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerPortfolioDigitalMarketing title="Projects of Digital Marketing" />

      {/* PortfolioDetailsArea */}
      <PortfolioDigitalMarketingInner />
    {/* <div className="space"><HeroSection/></div> */}


      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default ProjectDetailsDigitalMarketing;
