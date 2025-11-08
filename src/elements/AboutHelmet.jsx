import React from "react";
import { Helmet } from "react-helmet";
const AboutHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>
        About Digious Solutions |  Innovative IT Solutions
      </title>
      <meta
        name="description"
        content="Learn about Digious Solutions, an innovative IT solutions company in USA & Australia offering web, app, and marketing services to drive business success."
      />
    </Helmet>
  );
};

export default AboutHelmet;
