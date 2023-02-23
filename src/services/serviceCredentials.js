import axios from "axios";

export const deleteEducation = async (id) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        const res = await axios.delete(
            `http://localhost:8080/api/profile/education/${id}`,
            config
        );
        return res;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const deleteExperience = async (id) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
        };
        const res = await axios.delete(
            `http://localhost:8080/api/profile/experience/${id}`,
            config
        );
        return res;
    } catch (error) {
        console.error(error);
        return false;
    }
};
