import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);
  const [logInError, setLogInError] = useState(false);
  const history = useHistory();

  const logInUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    const tokens = await response.json();
    if (response.status === 200) {
      setAuthTokens(tokens);
      setUser(jwt_decode(tokens.access));
      localStorage.setItem("authTokens", JSON.stringify(tokens));
      setLogInError(false);
      history.push("/");
    } else {
      setLogInError(true);
    }
  };

  const logOutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    history.push("/login");
  };

  const updateTokens = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });
    const tokens = await response.json();
    if (response.status === 200) {
      setAuthTokens(tokens);
      setUser(jwt_decode(tokens.access));
      localStorage.setItem("authTokens", JSON.stringify(tokens));
    } else {
      logOutUser();
    }
    if (loading) {
      setLoading(false);
    }
  };

  const contextData = {
    user: user,
    authTokens: authTokens,
    logInError: logInError,
    logInUser: logInUser,
    logOutUser: logOutUser,
  };

  useEffect(() => {
    if (loading && authTokens) {
      updateTokens();
    } else {
      setLoading(false);
    }

    if (authTokens) {
      const fourMinutes = 1000 * 60 * 4;
      const intervalID = setInterval(() => {
        updateTokens();
      }, fourMinutes);
      return () => clearInterval(intervalID);
    }
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
