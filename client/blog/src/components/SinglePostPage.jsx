import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        // Mocked data to simulate fetching a post
        const mockPosts = [
            { id: "1", title: "Sample Post 1", content: "This is the content of sample post 1." },
            { id: "2", title: "Sample Post 2", content: "This is the content of sample post 2." },
        ];

        // Simulate fetching the post by ID
        const fetchedPost = mockPosts.find((post) => post.id === id);

        if (fetchedPost) {
            setPost(fetchedPost);
            setLoading(false);
        } else {
            setError("Post not found.");
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!post) {
        return <p>Post not found.</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default SinglePostPage;