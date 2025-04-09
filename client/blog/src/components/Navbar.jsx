import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    return (
        <nav className="bg-blue-600 p-4 flex justify-between items-center fixed top-0 left-0 w-full shadow-lg z-10">
            {/* Logo */}
            <div className="text-white font-bold text-xl">
                <Link to="/" className="hover:text-gray-200">
                    My Blog
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
                <Link to="/" className="text-white hover:text-gray-200">
                    Home
                </Link>

                {isLoggedIn ? (
                    <>
                        <Link to="/create" className="text-white hover:text-gray-200">
                            Create Post
                        </Link>
                        <Link to="/create-new" className="text-white hover:text-gray-200">
                            Create New Blog Post
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-200"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="text-white hover:text-gray-200">
                            Login
                        </Link>
                        <Link to="/register" className="text-white hover:text-gray-200">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;