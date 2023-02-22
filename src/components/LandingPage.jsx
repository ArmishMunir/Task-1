import React from "react";
import { Link } from "react-router-dom";
function LandingPage() {
    return (
        <div className="d-flex bg-slate-100 min-w-lg h-[100vh] d-flex justify-between p-3">
            <button
                className="bg-blue-400 text-white p-2 rounded-md"
                onClick={() => {
                    window.location.href = "/login";
                }}
            >
                Log in
            </button>
            <button
                className="bg-slate-500  text-white p-2 rounded-md mx-5"
                onClick={() => {
                    window.location.href = "/register";
                }}
            >
                Register
            </button>
        </div>
    );
}

export default LandingPage;
