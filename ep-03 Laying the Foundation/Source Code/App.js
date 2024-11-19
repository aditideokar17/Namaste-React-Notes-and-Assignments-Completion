import React from "react";
import ReactDOM from "react-dom/client";



// React Element
const heading = React.createElement("h1",{},"This is React Element");

//React Functional Components
const HeadingComponent1 = () =>{
    return <h1>Heading from React Functional Component</h1>
}

const HeadingComponent2 = () => <h1>Heading from React Functional Component</h1>;

const HeadingComponent3 = () => (<h1>
    Heading from React Functional Component
    </h1>);





// Rendering in react
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<HeadingComponent/>);