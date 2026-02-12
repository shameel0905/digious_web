import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import HeaderFive from "../components/HeaderFive";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import Preloader from "../elements/Preloader";

const BlogSingle = () => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleAndLatest = async () => {
      try {
        /* ---------------- SINGLE POST ---------------- */
        const postRes = await fetch(
          `https://blog.digiouscorp.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        const postData = await postRes.json();

        if (!postData.length) {
          setLoading(false);
          return;
        }

        const singlePost = postData[0];

        const featuredImage =
          singlePost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/assets/img/blog/default-blog.jpg";

        setPost({ ...singlePost, featured_image_url: featuredImage });

        /* ---------------- LATEST POSTS ---------------- */
        const latestRes = await fetch(
          "https://blog.digiouscorp.com/wp-json/wp/v2/posts?_embed&per_page=4"
        );
        const latestData = await latestRes.json();

        // 🔥 current post ko hata do
        const filtered = latestData
          .filter((p) => p.slug !== slug)
          .slice(0, 3)
          .map((p) => ({
            ...p,
            featured_image_url:
              p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/assets/img/blog/default-blog.jpg",
          }));

        setLatestPosts(filtered);
        setLoading(false);
      } catch (error) {
        console.error("Blog fetch error:", error);
        setLoading(false);
      }
    };

    fetchSingleAndLatest();
  }, [slug]);

  if (loading) return <Preloader />;
  if (!post) return <div>Blog Not Found</div>;

  return (
    <>
      <HeaderFive />

      <Breadcrumb
        title={post.title.rendered}
        bgImage={post.featured_image_url}
      />

      <section className="blog-area space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-30">
            {/* CONTENT */}
            <div className="col-xxl-8 col-lg-7">
              <div className="blog-details-card">
                <h2
                  className="blog-title text-white"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                <div className="blog-thumb">
                  <img
                    src={post.featured_image_url}
                    alt={post.title.rendered}
                  />
                </div>

                <div
                  className="blog-content text-white"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget">
                  <h3 className="widget_title">Latest Blogs</h3>

                  <div className="recent-post-wrap">
                    {latestPosts.map((p) => (
                      <div key={p.id} className="recent-post">
                        <div className="recent-post-meta">
                          <Link to={`/${p.slug}`}>
                            <img
                              src="/assets/img/icon/calender.svg"
                              alt="Digious"
                            />
                            {new Date(p.date).toLocaleDateString()}
                          </Link>
                        </div>

                        <div className="media-body">
                          <h4 className="post-title">
                            <Link
                              to={`/${p.slug}`}
                              dangerouslySetInnerHTML={{
                                __html: p.title.rendered,
                              }}
                            />
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <FooterOne />
    </>
  );
};

export default BlogSingle;
