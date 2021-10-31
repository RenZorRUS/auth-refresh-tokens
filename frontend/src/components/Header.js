import "./styles/Header.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="container-fluid header">
      <p className="logo">Access and Refresh Tokens</p>
      {user && (
        <p className="user-message">
          Hello, <span className="username">{user.username}</span>
        </p>
      )}
      <Link className="btn btn-primary home-btn" to="/">
        Home
      </Link>
      {user && (
        <button className="btn btn-primary logout-btn" onClick={logOutUser}>
          Log out
        </button>
      )}
    </div>
  );
};

export default Header;
