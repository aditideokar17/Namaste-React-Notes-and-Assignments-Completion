import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props);

        //state variable
        this.state = {
            // count: 0,
            // count2: 2

            userInfo: {
                name: "Akshay Saini",
                location: "Dehradun",
                contact: 123456789
            }
        };

        // console.log(this.props.name  + "Child Constructor");

    }

    // MAking api call here
    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/aditideokar17");
        const json = await data.json();
        console.log(json);

        this.setState(
            { userInfo: json }
        )

        // console.log(this.props.name  +"Child Component did Mount");

    }

    render() {

        // destructuring
        const { name, bio, url,
            avatar_url
        } = this.state.userInfo;
        // const { count, count2 } = this.state;

        // console.log(this.props.name  +"child render");

        return (
            <div className="user-card">
                {/* <h1>COUNT : {count}</h1> */}

                {/* Updating state variable */}
                {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,

                    })
                }}>Click Me</button> */}

                {/* <h1>COUNT2 : {count2}</h1> */}
                <img src={
                    avatar_url
                } />
                <h2>Name :{name}</h2>
                <h3>Location : {bio}</h3>
                <h4>Contact : {url}</h4>
            </div>
        );
    };
};

export default UserClass;