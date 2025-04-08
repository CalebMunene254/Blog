import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Simulate login (replace with your actual API call)
    if (username === 'test' && password === 'password') {
      // Successful login
      alert('Login successful!'); // Replace with your routing/state logic
      // Example routing with react-router-dom
      // history.push('/dashboard');
    } else {
      setError('Invalid username or password.');
    }

    // Example API call using fetch (replace with your backend endpoint)
    /*
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successful login
        // Handle success (e.g., redirect, store token)
        alert('Login successful!');
      } else {
        // Failed login
        const errorData = await response.json();
        setError(errorData.message || 'Login failed.');
      }
    } catch (err) {
      setError('An error occurred during login.');
      console.error('Login error:', err);
    }
    */
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '300px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ddd', borderRadius: '4px' }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ddd', borderRadius: '4px' }}
              required
            />
          </div>

          {error && <div style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>{error}</div>}

          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Login
          </button>
        </form>

        <div style={{ marginTop: '15px', textAlign: 'center' }}>
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;