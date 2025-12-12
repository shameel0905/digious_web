import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerBlogRevolutionizing from "../components/BreadcrumbInnerBlogRevolutionizing";
import BlogDetailsInnerRevolutionizing from "../components/BlogDetailsInnerRevolutionizing";
import BlogRevolutionizingHelmet from "../elements/BlogRevolutionizingHelmet";



const Blog_Revolutionizing = () => {
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
      <BlogRevolutionizingHelmet title={"BlogRevolutionizingHelmet"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerBlogRevolutionizing title="How AI is Revolutionizing Web Development" />

      {/* BlogDetailsInner */}
      <BlogDetailsInnerRevolutionizing />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default Blog_Revolutionizing;
