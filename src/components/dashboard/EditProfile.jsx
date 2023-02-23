import React, { useState, useEffect } from "react";
import { getUser, manageProfile } from "../../services/servicesProfile";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProfile() {
    const [formData, setFormData] = useState({
        company: "",
        website: "",
        location: "",
        status: "",
        skills: "",
        githubusername: "",
        bio: "",
        twitter: "",
        facebook: "",
        linkedin: "",
        youtube: "",
    });
    const fetchData = async () => {
        const res = await getUser();
        // console.log(res.data);
        setFormData({
            company: !res.data.company ? "" : res.data.company,
            website: !res.data.website ? "" : res.data.website,
            location: !res.data.location ? "" : res.data.location,
            status: !res.data.status ? "" : res.data.status,
            skills: !res.data.skills ? "" : res.data.skills,
            githubusername: !res.data.githubusername
                ? ""
                : res.data.githubusername,
            bio: !res.data.bio ? "" : res.data.bio,
            twitter: !res.data.twitter ? "" : res.data.twitter,
            facebook: !res.data.facebook ? "" : res.data.facebook,
            linkedin: !res.data.linkedin ? "" : res.data.linkedin,
            youtube: !res.data.youtube ? "" : res.data.youtube,
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        manageProfile(formData);
        // navigate("/developers");
    };

    return (
        <div className="p-10">
            <h1 className="text-2xl font-semibold text-gray-900">
                Create Your Profile
            </h1>
            <p className="text-sm text-gray-500">
                Let's get some information to make your profile stand out
            </p>
            <ToastContainer />
            <form className="mt-6" onSubmit={handelSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Company
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="company"
                                className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                                value={formData.company}
                                onChange={handelChange}
                            />

                            <p className="mt-2 text-sm text-gray-500">
                                one you work for
                            </p>

                            <label className="block text-sm font-medium text-gray-700">
                                Website
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handelChange}
                                    className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md  p-2 bg-slate-200"
                                />

                                <p className="mt-2 text-sm text-gray-500">
                                    company website
                                </p>

                                <label className="block text-sm font-medium text-gray-700">
                                    Location
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handelChange}
                                        className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                                    />

                                    <p className="mt-2 text-sm text-gray-500">
                                        City or State
                                    </p>

                                    <label
                                        htmlFor="status"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Status
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="status"
                                            name="status"
                                            value={formData.status}
                                            onChange={handelChange}
                                            className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-100"
                                        >
                                            <option>Developer</option>
                                            <option>Junior Developer</option>
                                            <option>Senior Developer</option>
                                            <option>Manager</option>
                                            <option>Student or Learning</option>
                                            <option>
                                                Instructor or Teacher
                                            </option>
                                            <option>Intern</option>
                                            <option>Other</option>
                                        </select>

                                        <p className="mt-2 text-sm text-gray-500">
                                            Give us an idea of where you are at
                                            in your career
                                        </p>

                                        <label
                                            htmlFor="skills"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Skills
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="skills"
                                                value={formData.skills}
                                                onChange={handelChange}
                                                className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                                            />

                                            <p className="mt-2 text-sm text-gray-500">
                                                (eg. HTML,CSS,JavaScript,PHP)
                                            </p>

                                            <label
                                                htmlFor="githubusername"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                GitHub Username
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="githubusername"
                                                    value={
                                                        formData.githubusername
                                                    }
                                                    onChange={handelChange}
                                                    className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                                                />

                                                <p className="mt-2 text-sm text-gray-500">
                                                    Github link,
                                                </p>

                                                <label
                                                    htmlFor="bio"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Bio
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="bio"
                                                        name="bio"
                                                        rows={3}
                                                        className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md  p-2 bg-slate-200"
                                                        value={formData.bio}
                                                        onChange={handelChange}
                                                    />

                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Tell us a little about
                                                        yourself
                                                    </p>

                                                    <div className="mt-6">
                                                        <div className="d-flex flex-col items-center justify-between">
                                                            <h2 className="text-lg font-medium text-gray-900">
                                                                Add Social
                                                                Network Links
                                                            </h2>

                                                            <span className="text-sm text-gray-500">
                                                                Optional
                                                            </span>

                                                            <label
                                                                htmlFor="facebook"
                                                                className="block text-sm font-medium text-gray-700"
                                                            >
                                                                Facebook
                                                            </label>
                                                            <div className="mt-1">
                                                                <input
                                                                    type="text"
                                                                    name="facebook"
                                                                    value={
                                                                        formData.facebook
                                                                    }
                                                                    onChange={
                                                                        handelChange
                                                                    }
                                                                    className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                                                                />

                                                                <label
                                                                    htmlFor="linkedin"
                                                                    className="block text-sm font-medium text-gray-700"
                                                                >
                                                                    LinkedIn
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        type="text"
                                                                        name="linkedin"
                                                                        value={
                                                                            formData.linkedin
                                                                        }
                                                                        onChange={
                                                                            handelChange
                                                                        }
                                                                        className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                                                                    />

                                                                    <label
                                                                        htmlFor="youtube"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        YouTube
                                                                    </label>

                                                                    <div className="mt-1">
                                                                        <input
                                                                            type="text"
                                                                            name="youtube"
                                                                            value={
                                                                                formData.youtube
                                                                            }
                                                                            onChange={
                                                                                handelChange
                                                                            }
                                                                            className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                                                                        />
                                                                        <div className="mt-6">
                                                                            <button
                                                                                type="submit"
                                                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                            >
                                                                                Save
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;
