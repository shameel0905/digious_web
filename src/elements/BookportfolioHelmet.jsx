import React from "react";
import { Helmet } from "react-helmet";
const BookportfolioHelmet= ({ title }) => {
  return (
    <Helmet>
      <title>
        Book Portfolio | Digious Solutions
      </title>
      <meta
        name="description"
        content="Explore Digious Solutions’ book publishing portfolio showcasing expertly crafted covers, layouts, and visual elements designed to enhance author branding and reader appeal."
      />
    </Helmet>
  );
};

export default BookportfolioHelmet;
