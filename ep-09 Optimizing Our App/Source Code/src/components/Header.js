import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

// Header Component
const Header = () =>{

    // js variable
    // const btnName = "login";

    //local state var
    const [btnName,setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();


    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo img"/>
            </div>

            <div className="nav-items" >
            <ul>
                <li>Online Status : {onlineStatus?"✅":"🔴"}</li>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/grocery"}>Grocery</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/"}>Services</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link>Cart</Link></li>
                <button onClick={()=>{
                    (btnName === "Login") ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
            </div>

        </div>
    );
};

export default Header;