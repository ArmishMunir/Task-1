import axios from "axios";
import { showToast } from "../components/toast";
export const getUser = async () => {
    try {
        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        // console.log(localStorage.getItem("token"));
        const res = await axios.get(
            "http://localhost:8080/api/profile/me",
            config
        );
        return res;
    } catch (error) {
        console.error(error);
        showToast("fail", "🥴" + error.msg);
    }
};

export const manageProfile = async (data) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        const res = await axios.post(
            "http://localhost:8080/api/profile",
            data,
            config
        );
        showToast("success", "💡 Profile updated");
        return res;
    } catch (error) {
        console.error(error);
        showToast("fail", "🥴" + error.msg);
    }
};

export const addExperience = async (data) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        const res = await axios.post(
            "http://localhost:8080/api/profile/experience",
            data,
            config
        );
        showToast("success", "💡 Experience added");
        console.log(res);
    } catch (error) {
        console.error(error);
        showToast("fail", "🥴" + error.msg);
    }
};

export const addEducation = async (data) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        const res = await axios.post(
            "http://localhost:8080/api/profile/education",
            data,
            config
        );
        showToast("success", "💡 Experience added");
        return res;
    } catch (error) {
        console.error(error);
        showToast("fail", "🥴" + error.msg);
    }
};

export const getExperience = async () => {
    try {
        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        const res = await axios.get(
            "http://localhost:8080/api/profile/experience",
            config
        );
        return res;
    } catch (error) {
        console.error(error);
        showToast("fail", "🥴" + error.msg);
    }
};

export const getProfiles = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/profile");
        // console.log(res.data);
        return res;
    } catch (error) {
        console.error(error);
        showToast("fail", "🥴" + error.msg);
    }
};

export const getProfile = async (id) => {
    try {
        const res = await axios.get(
            `http://localhost:8080/api/profile/user/${id}`
        );
        return res;
    } catch (error) {
        console.error(error);
        showToast("fail", "🥴" + error.msg);
    }
};
