import React from "react";
import { Helmet } from "react-helmet";
const BrandingportfolioHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>
        Branding Portfolio | Digious Solutions
      </title>
      <meta
        name="description"
        content="View Digious Solutions’ branding portfolio showcasing brand identity design, logo creation, and visual storytelling that define businesses with impact."
      />
    </Helmet>
  );
};

export default BrandingportfolioHelmet;
