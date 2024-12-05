import Logo from "../../assets/logo.png";
import Cart from "../../assets/cart.png";
import { useState } from "react";


// Header Component
const Header = () =>{
    // Local state variable
    const [logBtn,setLogBtn] = useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={Logo} alt="logo" />
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
                <button className="log-btn" onClick={()=>{
                    (logBtn == "Login") ? setLogBtn("Logout") : setLogBtn("Login")
                }}>{logBtn}</button>
            </ul>
            </div>
            <div className="cart-container">
            <img className="cart" src={Cart} alt="cart" />
            </div>
        </div>
    )
}

export default Header;