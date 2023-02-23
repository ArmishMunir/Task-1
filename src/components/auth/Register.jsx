import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../services/servicesAuth";

function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        register(user.name, user.email, user.password, user.confirmPassword);
    };

    return (
        <div className="bg-slate-200 p-10 justify-evenly h-[95vh]">
            <ToastContainer />
            <div className="bg-slate-100 p-10 rounded-md w-[50%] ml-[25%]">
                <h1 className="text-3xl text-center font-bold text-slate-500">
                    Register
                </h1>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            className="border-2 border-gray-300 rounded-md p-2"
                            onChange={handleChange}
                        />
                    </div>
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
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={user.confirmPassword}
                            className="border-2 border-gray-300 rounded-md p-2"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="bg-blue-400 text-white p-2 rounded-md"
                        type="submit"
                    >
                        Register
                    </button>
                    <div>
                        <p className="text-center">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-400">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
