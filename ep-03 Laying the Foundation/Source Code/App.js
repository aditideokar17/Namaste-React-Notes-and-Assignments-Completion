import React from "react";
import ReactDOM from "react-dom/client";



// React Element
const heading = React.createElement("h1",{},"This is React Element");

//JSX
const jsxHeading = <h1>This heading from JSX</h1>




// Rendering in react
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(heading);