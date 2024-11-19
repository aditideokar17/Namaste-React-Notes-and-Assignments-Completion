import React from "react";
import ReactDOM from "react-dom/client";
import userIcon from "./assets/user.png";

// Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice

const Header = () =>{
    return(
        <div id="header">
            <h1 id="logo">Namaste React</h1>
            <div id="searchbar">
                <input placeholder="Search.."></input>
                <button>search</button>
            </div>
            <div id="user">
            <img  src={userIcon} alt="User Icon"/>
            </div>
           
        </div>
    )
}


//rendering
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<Header/>);