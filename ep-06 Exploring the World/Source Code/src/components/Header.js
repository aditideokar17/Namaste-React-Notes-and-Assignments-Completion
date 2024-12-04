import { useState } from "react";
import {LOGO_URL} from "../utils/constants";

// Header Component
const Header = () =>{

    // js variable
    // const btnName = "login";

    //local state var
    const [btnName,setBtnName] = useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo img"/>
            </div>

            <div className="nav-items" >
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Cart</li>
                <button onClick={()=>{
                    (btnName === "Login") ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
            </div>

        </div>
    );
};

export default Header;