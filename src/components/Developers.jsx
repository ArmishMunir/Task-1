import React, { useState, useEffect } from "react";
import { getProfiles } from "../services/servicesProfile";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWork } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Developers() {
    const [developers, setDevelopers] = useState([]);
    useEffect(() => {
        getProfiles().then((res) => {
            setDevelopers(res.data);
        });
    }, []);

    const navigate = useNavigate();

    return (
        <div className="bg-slate-200 min-h-screen min-w-[100%]">
            <h1 className="text-4xl font-bold text-slate-800 shadow-sm p-4">
                Developers
            </h1>
            <div className=" grid grid-cols-4 gap-4 p-4">
                {developers.map((dev) => {
                    return (
                        <div
                            key={dev._id}
                            className="  p-2 mt-2 shadow-md cursor-pointer rounded-md bg-white hover:bg-slate-100"
                            onClick={() => {
                                navigate(`/my-profile/?id=${dev.user._id}`);
                            }}
                        >
                            <div className="flex flex-row justify-between ">
                                <img
                                    className="w-24 rounded-full shadow-lg "
                                    src={dev.user.avatar}
                                    alt="can't load image"
                                />

                                <p className="ml-1 font-light text-sm">
                                    <VscWorkspaceTrusted className="inline-block text-sm" />{" "}
                                    {dev.status}
                                </p>
                            </div>

                            <h1 className="font-bold text-slate-900 ml-1 text-xl">
                                {dev.user.name}
                            </h1>

                            <p className="text-sm">
                                <MdOutlineWork className="inline-block" />{" "}
                                {dev.company}
                            </p>
                            <p className="text-sm">
                                <CiLocationOn className="inline-block" />{" "}
                                {dev.location}
                            </p>
                            <div className="d-flex flex-row text-sm text-slate-500 font-light">
                                <p>
                                    <FcSalesPerformance className="inline-block" />{" "}
                                    {dev.skills}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Developers;
