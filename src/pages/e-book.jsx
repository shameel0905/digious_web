import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import EbookInnerDetails from "../components/EbookInnerDetails";
import BreadcrumbInnerEbook from "../components/BreadcrumbInnerEbook";
import TestimonialOne from "../components/TestimonialOne";
import EbookHelmet from "../elements/EbookHelmet";
import HeroSection from "../components/HeroSection";

const EbookService = () => {
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
      <EbookHelmet title={"Ebook Services"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerEbook title="Ebook" />
     

      {/* ServiceDetails */}
      <EbookInnerDetails/>

      {/* ProcessOne */}
      {/* <ProcessOne /> */}
          {/* <div className="space"><HeroSection/></div> */}

      
      

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

export default EbookService;
