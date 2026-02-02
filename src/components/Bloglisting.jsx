// src/components/BlogPosts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (page = 1) => {
    try {
      const res = await axios.get(
        `https://blog.digiouscorp.com/wp-json/wp/v2/posts?_embed&per_page=5&page=${page}`
      );
      setPosts(res.data);
      setTotalPages(parseInt(res.headers['x-wp-totalpages']));
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', margin: '20px', padding: '10px' }}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
          {post._embedded['wp:featuredmedia'] ? (
            <img
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              style={{ maxWidth: '100%' }}
            />
          ) : null}
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
          <p>
            <strong>Author:</strong> {post._embedded.author[0].name} |{' '}
            <strong>Date:</strong> {new Date(post.date).toLocaleDateString()}
          </p>
          <a href={post.link} target="_blank" rel="noreferrer">Read More</a>
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span style={{ margin: '0 10px' }}>{page} / {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default BlogPosts;
