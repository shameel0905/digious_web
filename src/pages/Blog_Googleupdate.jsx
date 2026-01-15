import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import GoogleupdateHelmet from "../elements/GoogleupdateHelmet";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerBlogGoogleupdate from "../components/BreadcrumbInnerBlogGoogleupdate";
import BlogDetailsInnerGoogleupdate from "../components/BlogDetailsInnerGoogleupdate";
import BlogGPTHelmet from "../elements/BlogGPTHelmet";
import HeroSection from "../components/HeroSection";



const Blog_Googleupdate = () => {
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
      <GoogleupdateHelmet title={"GoogleupdateHelmet"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerBlogGoogleupdate title="Google December 2025 Core Update Rolling Out Now" />

      {/* BlogDetailsInner */}
      <BlogDetailsInnerGoogleupdate />
          {/* <div className="space"><HeroSection/></div> */}


      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default Blog_Googleupdate;
