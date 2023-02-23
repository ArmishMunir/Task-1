import React from "react";
import Moment from "moment";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteExperience } from "../../services/serviceCredentials";

function Experience({ experience }) {
    const experiences = experience.map((exp) => {
        return (
            <tr key={exp._id} className="p-2 mt-2 gap-6 shadow-md">
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td className="ml-[5%] mr-5">
                    {Moment(exp.from).format("DD/MM/YYYY")}{" "}
                </td>
                <td className="ml-[5%]">
                    {Moment(exp.to).format("DD/MM/YYYY")}
                </td>
                <td className="p-4 m-4 cursor-pointer ">
                    <AiOutlineDelete
                        className="text-red-600"
                        onClick={() => {
                            deleteExperience(exp._id);
                        }}
                    />
                </td>
            </tr>
        );
    });

    return (
        <div className="p-2 ">
            <h2 className="text-lg text-slate-600 font-semibold m-2">
                Experience
            </h2>
            <table className="p-3 m-1 ">
                <thead className="text-slate-700 font-semibold">
                    <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th className="ml-[5%]">Start Date</th>
                        <th className="ml-5">End Date</th>
                        <th className="ml-3"></th>
                    </tr>
                </thead>
                <tbody className="p-2 mt-1">{experiences}</tbody>
            </table>
        </div>
    );
}

export default Experience;
