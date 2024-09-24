import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import BreadcrumbInner from "../components/BreadcrumbInner";
import PrivacyPolicy from "../components/PrivacyPolicy";

const PrivacyandPolicy = () => {
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
      <HelmetReact title={"Privacy policy"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInner title="Privacy Policy" />

      {/* ServiceDetails */}
      <PrivacyPolicy/>

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default PrivacyandPolicy;
