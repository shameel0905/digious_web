import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import BlogSeoHelmet from "../elements/BlogSeoHelmet";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderFive from "../components/HeaderFive";
import BreadcrumbInnerBlogSEO from "../components/BreadcrumbInnerBlogSEO";
import BlogDetailsInnerSEO from "../components/BlogDetailsInnerSEO";



const BlogSEO = () => {
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
      <BlogSeoHelmet title={"BlogSeoHelmet"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <BreadcrumbInnerBlogSEO title="How To Be A Success With Search Engine Optimization" />

      {/* BlogDetailsInner */}
      <BlogDetailsInnerSEO />
      

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default BlogSEO;
