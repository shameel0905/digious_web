import React from "react";
import { Helmet } from "react-helmet";
const GraphicportfolioHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>
        Graphic Design Portfolio | Digious Solutions
      </title>
      <meta
        name="description"
        content="Explore Digious Solutions’ graphic design portfolio showcasing creative logos, branding, and visual designs crafted to elevate your brand identity."
      />
    </Helmet>
  );
};

export default GraphicportfolioHelmet;
