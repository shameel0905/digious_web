import React from "react";
import { Helmet } from "react-helmet";

const SingleBlogHelmet = ({ post }) => {
  if (!post) return null;

  // Priority-based meta description
  const metaDescription =
    post.yoast_head_json?.description ||
    post.rank_math_description ||
    post.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, "").substring(0, 160) ||
    post.content?.rendered
      ?.replace(/(<([^>]+)>)/gi, "")
      .substring(0, 160) ||
    "Read this blog post on Digious Solutions.";

  const cleanTitle = post.title?.rendered || "Digious Solutions Blog";

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{cleanTitle} | Digious Solutions</title>
      <meta name="description" content={metaDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={`${cleanTitle} | Digious Solutions`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={post.featured_image_url} />
      <meta property="og:type" content="article" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${cleanTitle} | Digious Solutions`} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={post.featured_image_url} />
    </Helmet>
  );
};

export default SingleBlogHelmet;
