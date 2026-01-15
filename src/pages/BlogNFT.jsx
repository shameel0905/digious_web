import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import BlogNftHelmet from "../elements/BlogNftHelmet";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerBlogNFT from "../components/BreadcrumbInnerBlogNFT";
import BlogDetailsInnerNFT from "../components/BlogDetailsInnerNFT";
import HeroSection from "../components/HeroSection";



const BlogNFT = () => {
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
      <BlogNftHelmet title={"BlogNftHelmet"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerBlogNFT title="Blog NFT" />

      {/* BlogDetailsInner */}
      <BlogDetailsInnerNFT />
      {/* <HeroSection/> */}
      

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default BlogNFT;
