const heading = React.createElement("h1",{
    id:"heading",
    xyz:"random attribute"
},"Hello World! from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);