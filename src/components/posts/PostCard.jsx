import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { setLike, setDisLike } from "../../services/servicePost";
import Moment from "moment";
function PostCard({ id, text, name, avatar, date, likes }) {
    return (
        <div className="p-1 bg-slate-200 rounded-md shadow-md cursor-pointer hover:bg-slate-100 ">
            <div className="flex justify-start p-2">
                <img
                    className=" rounded-full shadow-lg w-20 h-20"
                    src={avatar}
                    alt=""
                />
                <div>
                    <h1 className="m-2">{name}</h1>
                    <p className="text-slate-600 text-xs m-2">
                        {date ? Moment(date).format("DD/MM/YYYY") : date}
                    </p>
                </div>
            </div>

            <div>
                <p className="font-semibold text-slate-600 text-md p-2">
                    {text}
                </p>
            </div>

            <div className="flex m-2">
                <AiOutlineLike
                    className="inline-block mb-1 text-xl cursor-pointer focus:ring hover:text-blue-500 ease-out duration-300"
                    onClick={async () => await setLike(id)}
                />
                <span>{likes}</span>
                <AiOutlineDislike
                    className="inline-block mb-1 ml-5 text-xl cursor-pointer hover:text-red-500 ease-out duration-300"
                    onClick={async () => await setDisLike(id)}
                />
            </div>
        </div>
    );
}

export default PostCard;
