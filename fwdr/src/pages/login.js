import React, { useState } from 'react';
import '../style/login.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'demo' && password === 'password') {
      console.log('Đăng nhập thành công!');
      setError('');
    } else {
      setError('Tên người dùng hoặc mật khẩu không đúng.');
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng Nhập</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Tên người dùng:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}

export default Login;