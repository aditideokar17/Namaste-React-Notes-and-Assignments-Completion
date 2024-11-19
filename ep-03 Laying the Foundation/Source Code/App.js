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

//Nested JSX
const HeadingComponent4 = () =>(
    <div>
        <h1>Nested JSX Element</h1>
    </div>
);

//Component Compositions
const Title = () => <h1>Title Component</h1>;

const Heading = () =>(
    <div>
        <h1>Heading</h1>
        <Title/>
    </div>
);


// Rendering in react
const root = ReactDOM.createRoot(
    document.getElementById("root")
);



root.render(<Heading/>);