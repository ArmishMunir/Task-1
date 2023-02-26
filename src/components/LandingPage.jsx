import React from "react";
import { Link } from "react-router-dom";
function LandingPage() {
    return (
        <div className="d-flex min-w-lg d-flex justify-between p-10 ml-[40%] mt-[15%]">
            <button
                className="bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-500 hover:px-4 ease-out duration-300"
                onClick={() => {
                    window.location.href = "/login";
                }}
            >
                Log in
            </button>
            <button
                className="bg-slate-400  text-white p-2 rounded-md mx-5 hover:bg-slate-500 hover:px-3 ease-out duration-300"
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
