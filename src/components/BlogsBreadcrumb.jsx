import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogsBreadcrumb = ({ title, postId }) => {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const fetchFeaturedImage = async () => {
      try {
        const res = await fetch(
          `https://blog.digiouscorp.com/wp-json/wp/v2/media?parent=${postId}`
        );
        const data = await res.json();

        if (data && data.length > 0) {
          // assuming the first media item is the featured image
          setBgImage(data[0].source_url);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (postId) fetchFeaturedImage();
  }, [postId]);

  return (
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage: bgImage
          ? `url(${bgImage})`
          : "url(/assets/img/blog/applleidforgetten.png)", // fallback
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title text-center">{title}</h1>
              <ul className="breadcumb-menu text-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsBreadcrumb;
