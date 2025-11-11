import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import BlogBlackfridayHelmet from "../elements/BlogBlackfridayHelmet";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BlogDetailsInnerAppleId from "../components/BlogDetailsInnerAppleId";
import BreadcrumbInnerBlackFriday from "../components/BreadcrumbInnerBlackFriday";
import BlogDetailsInnerBlackfriday from "../components/BlogDetailsInnerBlackfriday";



const Blog_BlackFriday = () => {
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
      <BlogBlackfridayHelmet title={"BlogBlackfridayHelmet"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerBlackFriday title="Black Friday Website Design Offer for Just $199" />

      {/* BlogDetailsInner */}
      <BlogDetailsInnerBlackfriday />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default Blog_BlackFriday;
