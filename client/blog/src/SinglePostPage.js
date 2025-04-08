import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../services/api";

function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default SinglePostPage;