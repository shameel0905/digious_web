import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerPortfolioAnimation from "../components/BreadcrumbInnerPortfolioAnimation";
import PortfolioAnimationInner from "../components/PortfolioAnimationInner";
import AnimationportfolioHelmet from "../elements/AnimationportfolioHelmet";
import HeroSection from "../components/HeroSection";



const ProjectDetailsAnimation = () => {
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
      <AnimationportfolioHelmet title={"Project Details"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerPortfolioAnimation title="Projects of Animation" />

      {/* PortfolioDetailsArea */}
      <PortfolioAnimationInner />
    <div className="space"><HeroSection/></div>


      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default ProjectDetailsAnimation;
