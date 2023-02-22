import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/userContext/userContext";

export const context = React.createContext();

export default function App() {
    const [loginState, setLoginState] = useState(false);
    return (
        <context.Provider value={[loginState, setLoginState]}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </context.Provider>
    );
}
