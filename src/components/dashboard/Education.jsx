import React from "react";
import Moment from "moment";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteEducation } from "../../services/serviceCredentials";
import { useNavigate } from "react-router-dom";

function Education({ education }) {
    const navigate = useNavigate();

    const educations = education.map((exp) => {
        return (
            <tr key={exp._id} className="p-2 mt-2 gap-6 shadow-md">
                <td>{exp.school}</td>
                <td>{exp.degree}</td>
                <td>{exp.fieldofstudy}</td>
                <td className="ml-[5%]">
                    {Moment(exp.from).format("DD/MM/YYYY")}{" "}
                </td>
                <td className="ml-[5%]">
                    {Moment(exp.to).format("DD/MM/YYYY")}
                </td>
                <td className="p-4 m-4 cursor-pointer ">
                    <AiOutlineDelete
                        className="text-red-600"
                        onClick={() => {
                            deleteEducation(exp._id);
                            navigate("/dashboard");
                        }}
                    />
                </td>
            </tr>
        );
    });

    return (
        <div className="p-2 ">
            <h2 className="text-lg text-slate-600 font-semibold m-2">
                Education
            </h2>
            <table className="p-3 m-1 ">
                <thead className="text-slate-700 font-semibold p-3">
                    <tr className="bg-slate-200 shadow-sm p-3 mt-2 ">
                        <th>School</th>
                        <th>Degree</th>
                        <th>Field</th>
                        <th className="ml-[5%]">Start Date</th>
                        <th className="ml-5">End Date</th>
                        <th className="ml-3"></th>
                    </tr>
                </thead>
                <tbody className="p-2 mt-1">{educations}</tbody>
            </table>
        </div>
    );
}

export default Education;
