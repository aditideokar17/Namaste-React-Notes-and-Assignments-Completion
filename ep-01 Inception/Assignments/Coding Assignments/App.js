//Creating React Element
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello World from React!"
);



//Creating root and rendering Elements
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);