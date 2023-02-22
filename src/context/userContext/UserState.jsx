import { useState } from "react";
import UserContext from "./userContext";

const UserState = ({ children }) => {
    const [loginState, setLoginState] = useState(false);
    const updateState = (prevState) => {
        setLoginState(!prevState);
    };
    return (
        <UserContext.Provider value={{ loginState, updateState }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserState;
