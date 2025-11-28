import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbPortfolioBlockChain from "../components/BreadcrumbPortfolioBlockChain";
import PortfolioBlockChainInner from "../components/PortfolioBlockChainInner";
import BlockchainHelmet from "../elements/BlockchainHelmet";
import HeroSection from "../components/HeroSection";



const ProjectDetailsBlockChain = () => {
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
      <BlockchainHelmet title={"Project Details"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbPortfolioBlockChain title="Projects of NFT'S" />

      {/* PortfolioDetailsArea */}
      <PortfolioBlockChainInner />
       <HeroSection/>

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default ProjectDetailsBlockChain;
