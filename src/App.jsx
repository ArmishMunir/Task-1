import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import React, { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Developers from "./components/Developers";
import Dashboard from "./components/dashboard/Dashboard";
import { showToast } from "./components/toast";
import CreateProfile from "./components/dashboard/CreateProfile";
import EditProfile from "./components/dashboard/EditProfile";
import AddExperience from "./components/dashboard/AddExperience";
import AddEducation from "./components/dashboard/AddEducation";
import Profile from "./components/profile/Profile";
import Post from "./components/posts/Post";

export const context = React.createContext();

export default function App() {
    const [loginState, setLoginState] = useState(false);
    const updateLoginState = useCallback(() => {
        setLoginState((prev) => !prev);
    }, [loginState]);

    return (
        <context.Provider value={[loginState, updateLoginState]}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/developers" element={<Developers />} />
                    <Route
                        path="/dashboard"
                        element={
                            loginState ? (
                                <Dashboard />
                            ) : (
                                (showToast("error", "🚫 Please login first"),
                                (<Navigate to="/login" />))
                            )
                        }
                    />

                    <Route
                        path="/create-profile"
                        element={
                            loginState ? (
                                <CreateProfile />
                            ) : (
                                (showToast("error", "🚫 Please login first"),
                                (<Navigate to="/login" />))
                            )
                        }
                    />
                    <Route
                        path="/edit-profile"
                        element={
                            loginState ? (
                                <EditProfile />
                            ) : (
                                (showToast("error", "🚫 Please login first"),
                                (<Navigate to="/login" />))
                            )
                        }
                    />
                    <Route
                        path="/education"
                        element={
                            loginState ? (
                                <AddEducation />
                            ) : (
                                (showToast("error", "🚫 Please login first"),
                                (<Navigate to="/login" />))
                            )
                        }
                    />
                    <Route
                        path="/experience"
                        element={
                            loginState ? (
                                <AddExperience />
                            ) : (
                                (showToast("error", "🚫 Please login first"),
                                (<Navigate to="/login" />))
                            )
                        }
                    />
                    <Route
                        path="/posts"
                        element={
                            loginState ? (
                                <Post />
                            ) : (
                                (showToast("error", "🚫 Please login first"),
                                (<Navigate to="/login" />))
                            )
                        }
                    />

                    <Route path="/my-profile" element={<Profile />} />
                </Routes>
            </Router>
        </context.Provider>
    );
}
