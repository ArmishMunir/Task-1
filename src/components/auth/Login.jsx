import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="bg-slate-200 p-10 justify-evenly h-[95vh]">
            <div className="bg-slate-100 p-10 rounded-md w-[50%] ml-[25%]">
                <h1 className="text-3xl text-center font-bold text-slate-500">
                    Log In
                </h1>
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
