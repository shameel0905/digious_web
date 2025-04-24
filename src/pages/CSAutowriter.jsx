import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import PortfolioDetailsArea from "../components/PortfolioDetailsArea";
import HeaderFive from "../components/HeaderFive";
import CSAutowriterInner from "../components/CSAutowriterInner";
import CSAutowriterReview from "../components/CSAutowriterReview";



const CSAutowriter = () => {
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
      <HelmetReact title={"Autowriter Ai"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <Breadcrumb title="Case Studies: Autowriter Ai" />

      {/* PortfolioDetailsArea */}
      {/* <PortfolioDetailsArea /> */}
      <CSAutowriterInner/>
      
      <div className="space">
        <CSAutowriterReview/>
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default CSAutowriter;
