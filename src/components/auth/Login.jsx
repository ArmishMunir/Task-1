import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/servicesAuth";
import { context } from "../../App";
import { showToast } from "../toast";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Login() {
    const [, updateLoginState] = useContext(context);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(user.email, user.password);
        if (res) {
            await updateLoginState();
            showToast("success", "🎉 Login successful");
            navigate("/developers");
        }
    };

    return (
        <div className="bg-slate-200 p-10 justify-evenly h-[95vh]">
            <div className="bg-slate-100 p-10 rounded-md w-[50%] ml-[25%]">
                <h1 className="text-3xl text-center font-bold text-slate-500">
                    Log In
                </h1>
                <ToastContainer />
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            className="border-2 border-gray-300 rounded-md p-2"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            className="border-2 border-gray-300 rounded-md p-2"
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        className="bg-blue-400 text-white p-2 rounded-md"
                        type="submit"
                    >
                        Log In
                    </button>

                    <div>
                        <p className="text-center">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-400">
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
