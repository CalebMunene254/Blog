import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // Mocked data to simulate fetching posts
    const mockPosts = [
      { id: 1, title: "Sample Post 1", content: "This is the content of sample post 1." },
      { id: 2, title: "Sample Post 2", content: "This is the content of sample post 2." },
      { id: 3, title: "Sample Post 3", content: "This is the content of sample post 3." },
    ];

    // Simulate fetching posts
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 500); // Simulate a 500ms delay
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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