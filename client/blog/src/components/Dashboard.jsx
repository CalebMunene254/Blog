import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/api/posts');
                setPosts(response.data);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError('Failed to fetch posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = async (postId) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await axios.delete(`/api/posts/${postId}`);
                setPosts(posts.filter((p) => p.id !== postId));
            } catch (deleteError) {
                console.error("Error deleting post:", deleteError);
                setError('Failed to delete post. Please try again.');
            }
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <Link to="/create-post" className="create-post-button">Create New Post</Link>
            {posts.length > 0 ? (
                <ul className="post-list">
                    {posts.map((post) => (
                        <li key={post.id} className="post-item">
                            <h3>{post.title}</h3>
                            <p>{post.content.substring(0, 100)}...</p>
                            <div className="post-actions">
                                <Link to={`/edit-post/${post.id}`} className="edit-button">Edit</Link>
                                <button onClick={() => handleDelete(post.id)} className="delete-button">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};

export default Dashboard;