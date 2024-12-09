import Logo from "../../assets/logo.png";
import Cart from "../../assets/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";

// Header Component
const Header = () => {
    // Local state variable
    const [logBtn, setLogBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <Link className="link-component" to={"/"} ><li>Home</li></Link>
                    <Link className="link-component" to={"/menu"} ><li>Menu</li></Link>
                    <Link className="link-component" to={"/services"} ><li>Services</li></Link>
                    <Link className="link-component" to={"/about"} ><li>About</li></Link>
                    <Link className="link-component" to={"/contact"} ><li>Contact</li></Link>
                    
                    <button className="log-btn" onClick={() => {
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