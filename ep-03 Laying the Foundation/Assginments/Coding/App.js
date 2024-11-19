import React from "react";
import ReactDOM from "react-dom/client";

// Create a functional component of the same with JSX

const Header = () =>{
    return(
        <div>
        <h1>heading1</h1>
        <h2>heading2</h2>
        <h3>heading3</h3>
        </div>
    )
}



//rendering
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<Header/>);