import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BlogDetailsInnerAppleId from "../components/BlogDetailsInnerAppleId";
import BreadcrumbInnerBlogAppleId from "../components/BreadcrumbInnerBlogAppleId";



const BlogAppleId = () => {
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
      <HelmetReact title={"Blog Details"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerBlogAppleId title="If You Have Forgotten Your Apple Id Password" />

      {/* BlogDetailsInner */}
      <BlogDetailsInnerAppleId />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default BlogAppleId;
