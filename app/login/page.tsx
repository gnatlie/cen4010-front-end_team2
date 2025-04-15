"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import './css/styles.css';


/**
 * Login page component
 * 
 * The component is a simple login form that sends a POST request to the server
 * with the username and password. If the request is successful, the user is
 * redirected to the home page. Otherwise, an error message is displayed.
 * 
 */
const Login: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  // Set is client to true when the component is mounted to avoid SSR issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isClient) return;

    // Send POST request to the server
    try {
      const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        console.log('Login successful');
        router.push('/');
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError('Failed to connect to server.' + error);
    }
  };

  return (
    <div className='page_style'>
        <h1 className="h1">
          <span style={{color: "#705848"}}>Pocket</span> <span style={{color: "#A4CF6F"}}>Pet</span>
        </h1>
        <form onSubmit={handleSubmit} >
          <div style={{ marginBottom: '1rem' }}>
            <br />
            <input
              id="username"
              type="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              style={{ padding: '0.5rem' }}
              className="username_label"
              placeholder="username"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <br />
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ padding: '0.5rem' }}
              className="password_label"
              placeholder="password"
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
            <button className="login_button" type="submit" style={{ padding: '0.5rem 1rem' }}>Login</button>
        
        </form>
      </div>
  );
};

export default Login;
