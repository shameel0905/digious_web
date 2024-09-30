import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import WebsiteInnerDetails from "../components/WebsiteInnerDetails";
import TestimonialOne from "../components/TestimonialOne";
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
      {/* <ProcessOneWebsite /> */}

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
