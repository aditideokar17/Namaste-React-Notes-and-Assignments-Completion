//Creating Nested Element
/*
<div id="parent">
    <div id="child">
    <h1>I am Aditi Deokar</h1>
    <h2>I am ReactJS Developer </h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I am Aditi Deokar"),React.createElement("h2",{},"I am ReactJS Developer")]
    )
)

//Creating root and rendering Elements
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);