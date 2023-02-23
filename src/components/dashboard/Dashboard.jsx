import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/servicesProfile";
import Experience from "./Experience";
import Education from "./Education";
import { MdModeEdit } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import Loader from "../../utils/loader";

function Dashboard() {
    const [user, setUser] = useState({});
    useEffect(() => {
        getUser().then((res) => {
            setUser(res.data);
            console.log(res.data);
        });
    }, []);
    const navigate = useNavigate();
    return (
        <div className="bg-slate-100 min-h-screen px-[20%] py-5">
            <div className="d-flex flex-grow flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-slate-800 p-1">
                    Dashboard
                </h1>
                {user.user ? (
                    <h1 className="font-semibold text-slate-600 text-md p-2">
                        Welcome {user.user.name.toUpperCase()}
                    </h1>
                ) : (
                    <Loader />
                )}
                {user.user && !user.user.status ? (
                    <div className="d-flex ">
                        <div className="mt-3">
                            <button
                                className="bg-blue-400 p-2 m-2 rounded-sm text-white"
                                onClick={() => {
                                    navigate("/edit-profile");
                                }}
                            >
                                <MdModeEdit className="inline-block mb-1" />{" "}
                                Edit Profile
                            </button>
                            <button
                                className="bg-blue-400 p-2 m-2 rounded-sm text-white"
                                onClick={() => {
                                    navigate("/education");
                                }}
                            >
                                <BiBookAdd className="inline-block mb-1" /> Add
                                Education
                            </button>
                            <button
                                className="bg-blue-400 p-2 m-2 rounded-sm text-white"
                                onClick={() => {
                                    navigate("/experience");
                                }}
                            >
                                <MdOutlinePlaylistAdd className="inline-block mb-1" />{" "}
                                Add Experience
                            </button>
                        </div>

                        <div className="d-flex flex-row p-2">
                            <Experience experience={user.experience} />
                            <Education education={user.education} />
                        </div>
                    </div>
                ) : (
                    <button
                        className="bg-blue-400 p-2 m-2 rounded-sm text-white"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/create-profile");
                        }}
                    >
                        Create a profile
                    </button>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
