import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);

  const loginUser = async () => {
    const response = fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-type": "applicaton/json",
      },
      body: JSON.stringify({ username: null, password: null }),
    });
  };

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
