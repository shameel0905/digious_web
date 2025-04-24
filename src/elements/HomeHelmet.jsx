import React from "react";
import { Helmet } from "react-helmet";
const HomeHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} | A Complete Digital Solutions Platform.
      </title>
      <meta
        name="description"
        content="Boost your online presence with Digious Solutions. We specialize in 360 Solutions. Elevate your business with innovative online solutions today!"
      />
    </Helmet>
  );
};

export default HomeHelmet;
