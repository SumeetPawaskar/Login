import React, { useState } from 'react';
import './App.css';

function App() {
  // States to manage username, password, and messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if both fields are filled
    if (username === '' || password === '') {
      setMessage('Both fields are required!');
    } else if (username === 'user' && password === 'password') {
      setMessage(`Welcome, ${username}`);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>XLogin</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;
