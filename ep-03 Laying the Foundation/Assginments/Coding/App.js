import React from "react";
import ReactDOM from "react-dom/client";

// Pass attributes into the tag in JSX
const Header = () =>{
    return(
        <div id="title" className="div-color">
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