import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import BlogBlackfridayHelmet from "../elements/BlogGPTHelmet";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerChatGPT from "../components/BreadcrumbInnerChatGPT";
import BlogDetailsInnerChatGPT from "../components/BlogDetailsInnerChatGPT";
import BlogGPTHelmet from "../elements/BlogGPTHelmet";



const Blog_ChatGpt = () => {
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
      <BlogGPTHelmet title={"BlogGPTHelmet"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerChatGPT title="ChatGPT Atlas vs Google Chrome: Which Browser Is Better?" />

      {/* BlogDetailsInner */}
      <BlogDetailsInnerChatGPT />
          <div className="space"><HeroSection/></div>


      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default Blog_ChatGpt;
