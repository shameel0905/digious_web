import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import BlockChainInnerDetails from "../components/BlockChainInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
import ProcessOneBlockChain from "../components/ProcessOneBlockChain";
import BreadcrumbInnerBlockChain from "../components/BreadcrumbInnerBlockChain";
import HeroSection from "../components/HeroSection";

const BlockChainService = () => {
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
      <HelmetReact title={"Graphic Design"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerBlockChain title="Block Chain Development" />

      {/* ServiceDetails */}
      <BlockChainInnerDetails />

      {/* ProcessOne */}
      <ProcessOneBlockChain />
         <div className="space"><HeroSection/></div>


      {/* TestimonialOne */}
      <div className="space">
        <TestimonialOne />
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default BlockChainService;
