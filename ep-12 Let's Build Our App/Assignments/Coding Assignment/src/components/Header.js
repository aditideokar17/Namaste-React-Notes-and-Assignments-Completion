import Logo from "../../assets/logo.png";
import Namaste from "../../assets/Namaste.png";
import Cart from "../../assets/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


// Header Component
const Header = () => {
    // Local state variable
    const [logBtn, setLogBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    // useContext Hook
    const data = useContext(UserContext);

    // useSelector Hook - subscribing to store using selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between items-center shadow-xl">
            <div className="ml-3">
                <img className="w-[120px]" src={Namaste} alt="logo" />
            </div>
            <div className="nav-items">
                <ul className="flex gap-5 justify-center items-center">

                    <li>Online Status : {onlineStatus?"✅":"🔴"}</li>
                    <Link className="hover:text-[#d62828]" to={"/"} ><li>Home</li></Link>
                    <Link className="hover:text-[#d62828]" to={"/menu"} ><li>Menu</li></Link>
                    <Link className="hover:text-[#d62828]" to={"/services"} ><li>Services</li></Link>
                    <Link className="hover:text-[#d62828]" to={"/about"} ><li>About</li></Link>
                    <Link className="hover:text-[#d62828]" to={"/contact"} ><li>Contact</li></Link>
                    
                    <button className="px-3 py-2 rounded-lg text-white  bg-[#d62828]" onClick={() => {
                        (logBtn == "Login") ? setLogBtn("Logout") : setLogBtn("Login")
                    }}>{logBtn}</button>
                    <li className="font-bold"><Link>{data.loggedInUser}</Link></li>
                </ul>
            </div>
            <div className="mr-3">
                <div className="border mb-3  rounded-full font-bold text-[20px] text-center ">{cartItems.length}</div>
                <Link to={"/cart"}><img className="w-[52px] mt-[-12px] " src={Cart} alt="cart" /></Link>
                
            </div>
        </div>
    )
}

export default Header;