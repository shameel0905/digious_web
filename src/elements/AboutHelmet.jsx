import React from "react";
import { Helmet } from "react-helmet";
const AboutHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} | Global IT & Digital Marketing Experts
      </title>
      <meta
        name="description"
        content="Digious Solutions provides IT and digital marketing services worldwide. From Design to Development, We deliver innovative solutions to your business."
      />
    </Helmet>
  );
};

export default AboutHelmet;
