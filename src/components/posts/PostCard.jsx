import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
function PostCard({ body, name, avatar, date }) {
    return (
        <div className="p-2 bg-white rounded-md">
            <div className="flex flex-row p-2">
                <img src={avatar} alt="" />
                <h1>{name}</h1>
                <p className="text-slate-600 text-sm ml-2">{date}</p>
            </div>

            <div>
                <p className="font-semibold text-slate-600 text-md p-2">
                    {body}
                </p>
            </div>
        </div>
    );
}

export default PostCard;
