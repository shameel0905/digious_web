import React from "react";
import { Helmet } from "react-helmet";
const BlogHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>
        Digious Solutions Blog | Insights on Digital Innovation
      </title>
      <meta
        name="description"
        content="Stay updated with the latest trends in AI, web, app, and digital technology. Explore expert insights, industry news, and strategies driving future innovation."
      />
    </Helmet>
  );
};

export default BlogHelmet;
