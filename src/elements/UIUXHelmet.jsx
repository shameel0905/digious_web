import React from "react";
import { Helmet } from "react-helmet";
const UIUXHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>
        UI/UX Design Portfolio | Digious Solutions
      </title>
      <meta
        name="description"
        content="Explore Digious Solutions’ UI/UX portfolio featuring innovative designs, seamless interfaces, and user-focused digital experiences for web and mobile."
      />
    </Helmet>
  );
};

export default UIUXHelmet;
