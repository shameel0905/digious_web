import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
// import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import WebsiteInnerDetails from "../components/WebsiteInnerDetails";
import BreadcrumbInner from "../components/BreadcrumbInner";
// import TestimonialOne from "../components/TestimonialOne";
import TestimonialTwo from "../components/TestimonialTwo";
import ProcessOne from "../components/ProcessOne";
import PortfolioThree from "../components/PortfolioThree";
import TestimonialOne from "../components/TestimonialOne";
import ProcessOneWebsite from "../components/ProcessOneWebsite";
import BreadcrumbInnerWebsiteDev from "../components/BreadcrumbInnerWebsiteDev";


const WebdevServices = () => {
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
      <HelmetReact title={"Website Development"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerWebsiteDev title="Website Development" />

      {/* ServiceDetails */}
      <WebsiteInnerDetails />

      {/* ProcessOne */}
      <ProcessOneWebsite />

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

export default WebdevServices;
