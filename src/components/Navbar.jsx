import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../App";
import { BiLogOutCircle } from "react-icons/bi";
import { IoLogoBuffer } from "react-icons/io";
function Navbar() {
    const [loginState, updateLoginState] = useContext(context);
    const token = localStorage.getItem("token");
    return (
        <div className="d-flex flex-auto flex-row space-x-20 bg-blue-500 text-white justify-center py-4 px-[10%]">
            {loginState && token ? (
                <>
                    <Link
                        to="/"
                        onClick={() => {
                            updateLoginState();
                            localStorage.removeItem("token");
                        }}
                    >
                        <BiLogOutCircle className="inline-block mb-1" /> Logout
                    </Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/developers">Developers</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </>
            ) : (
                <>
                    <Link to="/"></Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/developers">Developers</Link>
                </>
            )}
        </div>
    );
}

export default Navbar;
