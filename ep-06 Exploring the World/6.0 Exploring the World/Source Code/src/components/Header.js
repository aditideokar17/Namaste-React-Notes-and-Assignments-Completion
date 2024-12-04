import {LOGO_URL} from "../utils/constants";

// Header Component
const Header = () =>{
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
            </ul>
            </div>

        </div>
    );
};

export default Header;