import Logo from "../../assets/logo.png";
import Cart from "../../assets/cart.png";


// Header Component
const Header = () =>{
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
            </ul>
            </div>
            <div className="cart-container">
            <img className="cart" src={Cart} alt="cart" />
            </div>
        </div>
    )
}

export default Header;