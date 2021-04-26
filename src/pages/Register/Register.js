import axios from "axios";
import Layout from "Layout/Layout";
import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    axios
      .post("http://localhost:8888/user/register", user)
      .then((response) => {
        alert("Account successfully created");
        history.push("/login");
      })
      .catch((error) => alert(error.response.data));
  };
  return (
    <Layout title="Register">
      <div className="register">
        <h1>CREATE ACCOUNT</h1>
        <div className="register-form">
          <div className="register-input">
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
            />
          </div>
          <div className="register-input">
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
          </div>
          <div className="register-input">
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
          </div>
          <div className="register-input">
            <input
              type="submit"
              value="Create"
              className="register-btn"
              onClick={handleRegister}
            />
          </div>
          <a href="/">Return to store</a>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
