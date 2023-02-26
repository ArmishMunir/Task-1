import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import PostCard from "./PostCard";
import { addPost } from "../../services/servicePost";
import { getPosts } from "../../services/servicePost";

function Post() {
    const [post, setPost] = useState({
        text: "",
    });

    const [posts, setPosts] = useState([]);

    React.useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getPosts();
            setPosts(posts);
        };
        fetchPosts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addPost(post.text);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    return (
        <div className=" ml-[5%] p-4">
            <h1 className="text-4xl font-bold text-slate-800 p-5">
                Create post
            </h1>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto flex flex-col p-10"
                >
                    <div className="d-flex flex-col w-[50%]">
                        <input
                            rows={3}
                            type="text"
                            name="text"
                            placeholder="What's on your mind?"
                            className="block w-[450px] shadow-sm text-black sm:text-sm border-gray-300 rounded-md  p-2 bg-slate-200"
                            value={post.text}
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
                {posts.map((post) => (
                    <PostCard
                        key={post._id}
                        id={post._id}
                        text={post.text}
                        name={post.name}
                        avatar={post.avatar}
                        date={post.date}
                        likes={post.likes.length}
                    />
                ))}
            </div>
        </div>
    );
}

export default Post;
