import UserContext from "../utils/UserContext";
import {useContext} from "react";


const Menu = () => {

    // useContext Hook
    const data = useContext(UserContext);

    const { loggedInUser, setUserName } = useContext(UserContext);

    return (
        <div className="mt-10 flex justify-center items-center mb-36">
            {/* Modifying Context Live */}
            <h1 className="font-bold m-6 text-[27px] ">Welcome, {data.loggedInUser}</h1>
            <div className=" ml-10 flex mb-4 mt-4 items-center">
                <label className="font-bold ">Username : </label>
                <input className="p-1 outline-none border rounded-lg border-gray-700 ml-2" placeholder="Enter name"
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div></div>
    )
}

export default Menu;