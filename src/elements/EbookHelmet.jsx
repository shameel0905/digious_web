import React from "react";
import { Helmet } from "react-helmet";
const EbookHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>
        Professional Ebook Services in USA
      </title>
      <meta
        name="description"
        content="Top-rated eBook creation and formatting services in the USA. From cover design to layout, publishing, and conversion—elevate your book with a polished, professional digital experience."
      />
    </Helmet>
  );
};

export default EbookHelmet;
