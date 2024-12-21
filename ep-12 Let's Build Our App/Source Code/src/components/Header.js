import { useContext, useState } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// Header Component
const Header = () =>{

    // js variable
    // const btnName = "login";

    //local state var
    const [btnName,setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    // useContext Hook
    const data = useContext(UserContext);

    // useSelector Hook - subscribing to store using selector
    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-28 rounded-full p-2" src={LOGO_URL} alt="logo img"/>
            </div>

            <div className="flex items-center" >
            <ul className="flex p-4 m-4 gap-5 ">
                <li className="font-semibold">Online Status : {onlineStatus?"✅":"🔴"}</li>
                <li className="font-semibold"><Link to={"/"}>Home</Link></li>
                <li className="font-semibold"><Link to={"/grocery"}>Grocery</Link></li>
                <li className="font-semibold"><Link to={"/about"}>About</Link></li>
                <li className="font-semibold"><Link to={"/"}>Services</Link></li>
                <li className="font-semibold"><Link to={"/contact"}>Contact</Link></li>
                <li className="font-semibold"><Link to={"/cart"}>Cart( {cartItems.length} items)</Link></li>
                <button onClick={()=>{
                    (btnName === "Login") ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
                <li className="font-bold"><Link>{data.loggedInUser}</Link></li>
            </ul>
            </div>

        </div>
    );
};

export default Header;