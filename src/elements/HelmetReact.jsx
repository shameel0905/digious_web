import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} | A Complete Digital Solutions Platform.
      </title>
      <meta
        name="description"
        content="Digious Solutions - A Complete Digital Solutions Platform"
      />
    </Helmet>
  );
};

export default HelmetReact;
