import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import BlogAreaAll from "../components/BlogAreaAll";
import HeaderFive from "../components/HeaderFive";
import BlogtHelmet from "../elements/BlogHelmet";



const Blog = () => {
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
      <BlogtHelmet title={"Blog"} />

      {/* HeaderFive */}
      <HeaderFive />

      {/* Breadcrumb */}
      <Breadcrumb title="Blogs" />

      {/* BlogAreaAll */}
      <BlogAreaAll />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default Blog;
