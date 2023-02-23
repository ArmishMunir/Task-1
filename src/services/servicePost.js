import axios from "axios";
import { showToast } from "../components/toast";
export const postToDB = async (data) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        const res = await axios.post(
            "http://localhost:8080/api/post",
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
