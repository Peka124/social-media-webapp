import "./App.css";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import NavBar from "./components/NavBar";
import FriendsPage from "./components/FriendsPage";
import FriendsPageUser from "./components/FriendsPageUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();
  function addToken(auth_token) {
    setToken(auth_token);
  }
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage addToken={addToken} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<NavBar token={token} />}>
          <Route path="home" element={<FriendsPage />} />
        </Route>
        <Route path="/" element={<NavBar token={token} />}>
          <Route path="home1" element={<FriendsPageUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
