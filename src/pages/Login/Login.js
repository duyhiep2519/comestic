import React, { useState } from "react";
import "../Register/Register.css";
import Layout from "Layout/Layout";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    axios
      .post("http://localhost:8888/user/login", user)
      .then((response) => {
        alert("Logged in successfully");
        history.push("/");
      })
      .catch((error) => alert(error.response.data));
  };
  return (
    <Layout title="Register">
      <div className="register">
        <h1>LOGIN</h1>
        <div className="register-form">
          <div className="register-input">
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="register-input">
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="register-input">
            <input
              type="submit"
              value="Login"
              className="register-btn"
              onClick={handleLogin}
            />
          </div>
          <a href="/register">Create account</a>
          <a href="/">Return to store</a>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
