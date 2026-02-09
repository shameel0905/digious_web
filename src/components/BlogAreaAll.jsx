import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../elements/Preloader";

const BlogAreaAll = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch posts with embedded author, featured image, and categories
        const res = await fetch(
          "https://blog.digiouscorp.com/wp-json/wp/v2/posts?_embed=author,wp:featuredmedia,wp:term"
        );
        const data = await res.json();

        const postsWithData = data.map((post) => {
          // Featured image fallback
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/assets/img/blog/default-blog.jpg";

          // Author name fallback
          const authorName = post._embedded?.author?.[0]?.name || "Admin";

          // Category name fallback
          const categoryName =
            post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Category";

          return {
            ...post,
            featured_image_url: featuredImage,
            authorName,
            categoryName,
          };
        });

        setPosts(postsWithData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  /* ================= LOADING & SAFETY ================= */
  if (loading) return <Preloader />;
  if (!posts.length) return <p>No posts available</p>;

  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          {/* ================= MAIN BLOG POSTS ================= */}
          <div className="col-xxl-8 col-lg-7">
            {posts.map((post) => (
              <div key={post.id} className="blog-single-card">
                <div className="blog-thumb">
                  <img
                    src={post.featured_image_url}
                    alt={post.title.rendered}
                  />
                  <div className="blog-date">
                    <Link to={`/${post.slug}`}>
                      <span>{new Date(post.date).getDate()}</span>
                      {new Date(post.date).toLocaleString("default", {
                        month: "long",
                      })}
                    </Link>
                  </div>
                </div>

                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to={`/${post.slug}`}>
                      <i className="fas fa-user" /> By {post.authorName}
                    </Link>
                    <Link to={`/${post.slug}`}>
                      <i className="fas fa-folder-open" /> {post.categoryName}
                    </Link>
                    <Link to={`/${post.slug}`}>
                      <i className="fas fa-comments" /> Comments (
                      {post.comment_count || 0})
                    </Link>
                  </div>

                  <h3 className="blog-title">
                    <Link
                      to={`/${post.slug}`}
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </h3>

                  <p
                    className="blog-text"
                    dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || "" }}
                  />

                  <Link
                    to={`/${post.slug}`}
                    className="global-btn style-border2"
                  >
                    Read More
                    <img
                      src="/assets/img/icon/right-icon2.svg"
                      alt="Digious Solutions"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ================= SIDEBAR ================= */}
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              {/* Search Widget */}
              <div className="widget widget_search">
                <h3 className="widget_title">Search Here</h3>
                <form className="search-form">
                  <input type="text" placeholder="Search.." />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>

              {/* Latest Posts Widget */}
              <div className="widget">
                <h3 className="widget_title">Latest Blogs</h3>
                <div className="recent-post-wrap">
                  {posts.slice(0, 3).map((post) => (
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
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
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
  );
};

export default BlogAreaAll;
