import axios from "axios";
import { showToast } from "../components/toast";

export const addPost = async (data) => {
    try {
        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        // console.log("Hit!", data);
        const res = await axios.post(
            "http://localhost:8080/api/posts",
            data,
            config
        );

        showToast("success", "💡 Experience added");
        console.log(res);
    } catch (error) {
        console.error(error);
        showToast("fail", "🥴 Can't add post.");
    }
};

export const getPosts = async () => {
    try {
        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        const res = await axios.get("http://localhost:8080/api/posts", config);
        return res.data;
    } catch (error) {
        console.error(error);
        showToast("fail", "🥴 Can't get posts.");
    }
};

export const setLike = async (id) => {
    try {
        const config = {
            headers: {
                // "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        // console.log("Hit!", localStorage.getItem("token"));
        const res = await axios.put(
            `http://localhost:8080/api/posts/like/${id}`,
            config
        );

        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const setDisLike = async (id) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        const res = await axios.put(
            `http://localhost:8080/api/posts/unlike/${id}`,
            config
        );
        return res.data;
    } catch (error) {
        console.error(error);
    }
};
