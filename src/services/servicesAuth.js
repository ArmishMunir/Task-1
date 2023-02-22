import axios from "axios";
import { showToast } from "../components/toast";

export const register = async (name, email, password, confirmPassword) => {
    // console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) {
        showToast("fail", "📌 Passwords do not match");
        return;
    }

    const newUser = {
        name,
        email,
        password,
    };
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.post(
            "http://localhost:8080/api/users",
            newUser,
            config
        );
        localStorage.setItem("token", res.data.token);
        showToast("success", "🎉 Registration successful");
    } catch (error) {
        console.error(error);
        showToast("fail", "🥴" + error.msg);
    }
};

export const login = async (email, password) => {
    const newUser = {
        email,
        password,
    };

    const body = JSON.stringify(newUser);

    try {
        // console.log(body);
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.post(
            "http://localhost:8080/api/users/auth",
            body,
            config
        );
        // console.log(res.data);
        localStorage.setItem("token", res.data);
        return true;
    } catch (error) {
        // const err = error.response;
        // console.error(error);
        localStorage.removeItem("token");
        showToast("fail", "🥴" + error);
    }
};
