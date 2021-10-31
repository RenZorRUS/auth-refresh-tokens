import './styles/HomePage.css'
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const { authTokens, logOutUser } = useContext(AuthContext);

  const getNotes = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/notes/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      setNotes(data);
    } else if (response.status === 401) {
        logOutUser();
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="container home-container">
      <p className="home-message">You are logged to the home page</p>
      <ul className="list-group">
        {notes.map((note) => (
          <li className="list-group-item" key={note.id}>
            {note.body}
          </li>
        ))}
      </ul>
      <p className="home-message">Tokens</p>
      <ul className="list-group">
        <li className="list-group-item">
          Access: <span>{authTokens.access}</span>
        </li>
        <li className="list-group-item">
          Refresh: <span>{authTokens.refresh}</span>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
