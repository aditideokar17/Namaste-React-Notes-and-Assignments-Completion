import React from "react";
import ReactDOM from "react-dom/client";

// Components to build
/**
 * 
 * Header
 *  -logo
 *  -nav Items
 * 
 * Body
 *  -Search
 *  -Restaurent Container
 *      -Restaurent Card
 * 
 * Footer
 *  -copyright
 *  -links
 *  -address
 *  -contacts
 * 
 */


// Header Component
const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/736x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg" alt="logo img"/>
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


//AppLayout Component
const AppLayout = () =>{
    return(
        <div className="app">
        <Header/>
        </div>
    );
};


// rendering
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <AppLayout/>
);