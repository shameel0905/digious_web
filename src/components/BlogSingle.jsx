import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderFive from "../components/HeaderFive";
import BlogsBreadcrumb from "../components/BlogsBreadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import Preloader from "../elements/Preloader";
import SingleBlogHelmet from "../elements/SingleBlogHelmet";

const BlogSingle = () => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleAndLatest = async () => {
      try {
        /* ================= SINGLE POST ================= */
        const postRes = await fetch(
          `https://blog.digiouscorp.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        const postData = await postRes.json();

        if (!postData.length) {
          setLoading(false);
          return;
        }

        const singlePost = postData[0];

        /* Featured Image */
        const featuredImage =
          singlePost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/assets/img/blog/default-blog.jpg";

        /* ================= META DESCRIPTION ================= */
        const metaDescription =
          singlePost.yoast_head_json?.description ||
          singlePost.rank_math_description ||
          singlePost.excerpt?.rendered
            ?.replace(/<[^>]+>/g, "")
            ?.substring(0, 160) ||
          "Read this latest blog from Digious Solutions.";

        setPost({
          ...singlePost,
          featured_image_url: featuredImage,
          meta_description: metaDescription,
        });

        /* ================= LATEST POSTS ================= */
        const latestRes = await fetch(
          "https://blog.digiouscorp.com/wp-json/wp/v2/posts?_embed&per_page=4"
        );
        const latestData = await latestRes.json();

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

  /* ================= LOADING & SAFETY ================= */
  if (loading) return <Preloader />;
  if (!post) return <p>Post not found</p>;

  return (
    <>
      {/* ================= SEO HELMET ================= */}
      <SingleBlogHelmet post={post} />

      <HeaderFive />
      <BlogsBreadcrumb title={post.title.rendered} />

      <section className="blog-area space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-40">
            {/* ================= MAIN BLOG ================= */}
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

            {/* ================= SIDEBAR ================= */}
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                {/* Search */}
                <div className="widget widget_search">
                  <h3 className="widget_title">Search Here</h3>
                  <form className="search-form">
                    <input type="text" placeholder="Search.." />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>

                {/* Latest Posts */}
                <div className="widget">
                  <h3 className="widget_title">Latest Blogs</h3>
                  <div className="recent-post-wrap">
                    {latestPosts.map((post) => (
                      <div key={post.id} className="recent-post">
                        <div className="recent-post-meta">
                          <Link to={`/${post.slug}`}>
                            <img
                              src="/assets/img/icon/calender.svg"
                              alt="Digious Solutions"
                            />
                            {new Date(post.date).toLocaleDateString()}
                          </Link>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <Link
                              className="text-white"
                              to={`/${post.slug}`}
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered,
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
