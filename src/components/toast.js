import { toast } from "react-toastify";
const params = {
    position: "top-right",
    autoClose: 2500,
};

export const showToast = (type, msg) => {
    switch (type) {
        case "success":
            toast.success(msg, params);
            break;
        case "fail":
            toast.error(msg, params);
            break;
    }
};
