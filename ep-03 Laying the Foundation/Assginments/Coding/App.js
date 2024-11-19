import React from "react";
import ReactDOM from "react-dom/client";

//Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)

const heading1 = React.createElement("h1",{},"heading 1");
const heading2 = React.createElement("h2",{},"heading 2");
const heading3 = React.createElement("h3",{},"heading 3");

const header = React.createElement("div",
    {className:"title"},
    [heading1,heading2,heading3]
);




//rendering
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(header);