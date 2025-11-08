import React from "react";
import { Helmet } from "react-helmet";
const CasestudiesHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>
        Case Studies | Success Stories That Drive Business Growth
      </title>
      <meta
        name="description"
        content="Explore our case studies showcasing web, graphic design, mobile app, and digital marketing solutions that boost growth, improve results, and drive innovation."
      />
    </Helmet>
  );
};

export default CasestudiesHelmet;
