import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import PostCard from "./PostCard";
import { postToDB } from "../../services/servicePost";

function Post() {
    const [post, setPost] = useState({
        body: "",
    });

    const [postData, setPostData] = useState({
        body: "",
    });

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(post);
        // postToDB(post.body);
    };

    return (
        <div className=" ml-[25%]">
            <h1 className="text-4xl font-bold text-slate-800 p-10">
                Create post
            </h1>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto flex flex-col p-10"
                >
                    <div className="d-flex flex-col w-[50%]">
                        <textarea
                            rows={3}
                            type="text"
                            name="body"
                            placeholder="What's on your mind?"
                            className="block w-[450px] shadow-sm text-black sm:text-sm border-gray-300 rounded-md  p-2 bg-slate-200"
                            value={post.body}
                            onChange={handleChange}
                        />

                        <button
                            type="submit"
                            className="p-2 bg-blue-400 text-white m-2 rounded-sm"
                        >
                            <FiSend className="inline-block mb-1" /> Post
                        </button>
                    </div>
                </form>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <PostCard />
            </div>
        </div>
    );
}

export default Post;
