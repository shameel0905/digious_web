// src/components/SingleBlogHelmet.js
import React from "react";
import { Helmet } from "react-helmet";

const SingleBlogHelmet = ({ post }) => {
  if (!post) return null;

  // Clean HTML from excerpt for meta description
  const metaDescription = post.excerpt?.rendered
    ? post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")
    : "Read this blog post on Digious Solutions.";

  return (
    <Helmet>
      {/* Dynamic Title with site name prefix */}
      <title>Digious Solutions | {post.title.rendered}</title>
      <meta name="description" content={metaDescription} />

      {/* Open Graph tags */}
      <meta property="og:title" content={`Digious Solutions | ${post.title.rendered}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={post.featured_image_url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Digious Solutions | ${post.title.rendered}`} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={post.featured_image_url} />
    </Helmet>
  );
};

export default SingleBlogHelmet;
