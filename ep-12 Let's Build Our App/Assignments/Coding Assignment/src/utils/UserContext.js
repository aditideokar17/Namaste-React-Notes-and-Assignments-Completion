import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Defautl User"
});

export default UserContext;