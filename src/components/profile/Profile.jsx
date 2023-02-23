import React, { useState, useEffect } from "react";
import { getProfile } from "../../services/servicesProfile";
import { IoSchoolSharp } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Profile() {
    const params = new URLSearchParams(window.location.search);
    const uid = params.get("id");

    const [profile, setProfile] = useState({});

    useEffect(() => {
        getProfile(uid).then((res) => {
            setProfile(res.data);
            console.log(res.data);
        });
    }, []);

    const education = profile.education?.map((edu) => {
        return (
            <ul key={edu._id}>
                <li className="p-1">
                    <IoSchoolSharp className="inline-block text-slate-700" />{" "}
                    {edu.school}
                </li>
                <li className="p-1">
                    <MdVerifiedUser className="inline-block text-slate-700" />{" "}
                    {edu.degree}
                </li>
                <li>
                    <BiTargetLock className="inline-block text-slate-700" />{" "}
                    {edu.fieldofstudy}
                </li>
                <li className="w-50% h-0.5 bg-slate-100 mt-2"></li>
            </ul>
        );
    });

    const experience = profile.experience?.map((exp) => {
        return (
            <ul key={exp._id}>
                <li className="p-1">
                    <MdOutlineWork className="inline-block text-slate-700" />{" "}
                    {exp.company}
                </li>
                <li className="p-1">
                    <MdVerifiedUser className="inline-block text-slate-700" />{" "}
                    {exp.title}
                </li>
                <li>
                    <CiLocationOn className="inline-block text-slate-700" />{" "}
                    {exp.location ? exp.location : "Not Specified"}
                </li>
                <li className="w-50% h-0.5 bg-slate-100 mt-2"></li>
            </ul>
        );
    });

    return (
        <div className="bg-slate-200 max-w-[100%] min-h-screen">
            <h1 className="text-4xl font-bold text-slate-800 p-4">Profile</h1>
            {profile.user && (
                <div className="d-flex p-2 m-2">
                    <img
                        className="mx-auto rounded-full shadow-lg"
                        src={profile.user.avatar}
                        alt="avatar"
                    />
                    <h1 className="mx-auto text-2xl font-bold ml-[48%] mt-3">
                        {profile.user.name.toUpperCase()}
                    </h1>

                    <div className="grid grid-cols-3 gap-6 p-10">
                        <div className="p-3 bg-slate-50 rounded-md shadow-md">
                            <p className="font-bold text-2xl text-green-600">
                                Education
                            </p>
                            {education}
                        </div>

                        <div className="p-3 bg-slate-50 rounded-md shadow-md">
                            <p className="font-bold text-2xl text-green-600">
                                Experience
                            </p>
                            {experience}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
