
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/LoginActions';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    const credentials = { username, password };
    login(credentials, rememberMe);
  };

  return (
    <>
    <div className='container-fluid'>
    <div className='row'>
<div className='d-flex justify-content-center align-item-center'>
    <form>
    <div className="form-group">
      <label>Username</label>
      <input   type="text"
      className="form-control"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}/>
    </div>
    <div className="form-group">
      <label >Password</label>
      <input
      type="password"
      className='form-control'
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    </div>
    <div className="form-check">
    <input
    type="checkbox"
    className="form-check-input"
    checked={rememberMe}
    onChange={() => setRememberMe(!rememberMe)}
  />
      <label className="form-check-label">  Remember Me</label>
    </div>
    <button type="submit" className="btn btn-dark rounded-pill px-3">Login</button>
  </form>
  </div>
    </div>
    </div>

    </>
  );
};

export default connect(null, { login })(Login);
