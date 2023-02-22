import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="d-flex flex-auto flex-row space-x-2 bg-blue-500 text-white justify-center py-4 px-20">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/developers">Developers</Link>
        </div>
    );
}

export default Navbar;
