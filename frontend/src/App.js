import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <PrivateRoute exact path="/" component={HomePage}></PrivateRoute>
          <Route path="/login" component={LoginPage}></Route>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
