import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../app/store';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    name: '',
    pass: ''
  });

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim()) {
      dispatch(login(user.name));
    }
  };

  return (
    <div className="contener p-3" >
      <form onSubmit={handleSubmit} className="login-card">
        <h3 className="mb-3 text-center">Login</h3>
        <input
          name="name"
          type="text"
          value={user.name}
          onChange={handleChange}
          className="form-input"
          placeholder="Username"
        />
        <input
          name="pass"
          type="password"
          value={user.pass}
          onChange={handleChange}
          className="form-input"
          placeholder="Password"
        />
        <button className="btn btn-primary w-100 mt-3" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
