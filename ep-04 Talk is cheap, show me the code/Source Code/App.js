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

// Restaurent Card
const RestaurentCard = () =>{
    return(
        <div className="res-card">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hjao7sorzggaeqito6au" />
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian</h4>
        <h4>4.5 stars</h4>
        <h4>20 Minutes</h4>
        </div>
    );
};


// Body Component
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
            <input className="search-input" placeholder="search" />
            <button className="search-btn">search</button>
            </div>

            <div className="res-container">
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
            </div>
        </div>
    );
};


//AppLayout Component
const AppLayout = () =>{
    return(
        <div className="app">
        <Header/>
        <Body/>
        </div>
    );
};


// rendering
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <AppLayout/>
);