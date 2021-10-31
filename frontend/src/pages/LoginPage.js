import "./styles/LoginPage.css";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { logInError, logInUser } = useContext(AuthContext);

  return (
    <div className="container">
      {logInError && (
        <p className="login-error">Invalid username or password</p>
      )}
      <form onSubmit={logInUser}>
        <div className="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group">
          <label for="userpass">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="userpass"
            placeholder="Password"
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
