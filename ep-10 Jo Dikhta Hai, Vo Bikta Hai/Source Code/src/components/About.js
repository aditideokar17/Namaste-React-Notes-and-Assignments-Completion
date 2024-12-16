import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class  About extends React.Component {
   
    constructor(props) {
        super(props);

        console.log("Parent Constructor");

    }

    componentDidMount(){
        console.log("Parent Component did Mount");
    } 

   render(){

    console.log("Parent Render");
    
    return (
        <div >
            <h1>This is About Page</h1>

            
            <UserClass name="First" location="Pune, Maharashtra" />
            {/* <UserClass name="Second" location="USA" /> */}
        </div>
    )

    /*
    
    When there are multiple childrens

    FirstChild Constructor
    Firstchild render
    SecondChild Constructor
    Secondchild render
    FirstChild Component did Mount
    SecondChild Component did Mount

    
    */
}
}

export default About;