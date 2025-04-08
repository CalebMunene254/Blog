import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../services/api";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}> 
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;