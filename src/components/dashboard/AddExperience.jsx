import React, { useState } from "react";
import { addExperience } from "../../services/servicesProfile";
import { showToast } from "../toast";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function AddExperience() {
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        from: "",
        to: "",
        current: false,
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addExperience(formData);
        showToast("success", "🚀 Experience added successfully");
        setTimeout(() => {
            navigate("/dashboard");
        }, 1500);
    };

    return (
        <div className="bg-slate-100 px-[30%]  py-[5%] justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-slate-800 p-1">
                Add Experience
            </h1>

            <form
                className="flex flex-col gap-2 max-w-md"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                        value={formData.title}
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                title: e.target.value,
                            }));
                        }}
                    />

                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                company: e.target.value,
                            }));
                        }}
                    />

                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                        value={formData.location}
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                location: e.target.value,
                            }));
                        }}
                    />

                    <label htmlFor="from">From</label>
                    <input
                        type="date"
                        name="from"
                        id="from"
                        className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                        value={formData.from}
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                from: e.target.value,
                            }));
                        }}
                    />

                    <label htmlFor="to">To</label>
                    <input
                        type="date"
                        name="to"
                        id="to"
                        className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                        value={formData.to}
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                to: e.target.value,
                            }));
                        }}
                    />

                    <span className="d-flex gap-3 mr-5">
                        <label htmlFor="current">Current</label>
                        <input
                            type="checkbox"
                            name="current"
                            id="current"
                            className="ml-5 text-xl"
                            value={formData.current}
                            onChange={(e) => {
                                setFormData((prev) => ({
                                    ...prev,
                                    current: e.target.value,
                                }));
                            }}
                        />
                    </span>

                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-slate-200"
                        value={formData.description}
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                description: e.target.value,
                            }));
                        }}
                    />
                </div>
                <button
                    className="bg-blue-400 p-2 m-2 rounded-sm text-white"
                    type="submit"
                >
                    Submit Experience
                </button>
            </form>
        </div>
    );
}

export default AddExperience;
