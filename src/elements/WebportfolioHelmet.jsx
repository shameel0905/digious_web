import React from "react";
import { Helmet } from "react-helmet";
const WebportfolioHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>
        Website Development Portfolio | Digious Solutions
      </title>
      <meta
        name="description"
        content="Discover Digious Solutions’ web development portfolio featuring responsive, high-performance websites built to engage users and drive business growth."
      />
    </Helmet>
  );
};

export default WebportfolioHelmet;
