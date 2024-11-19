import React from "react";
import ReactDOM from "react-dom/client";

// Composition of Component(Add a component inside another)

const Logo = () =>(
    <h1>Aditi Deokar</h1>
);

const Header = () =>{
    return(
        <div id="title" className="div-color">
        <h1>heading1</h1>
        <h2>heading2</h2>
        <h3>heading3</h3>
        <Logo/>
        </div>
    )
}



//rendering
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<Header/>);