import { useState } from "react";

const User = ({name}) => {

    // Local state varible
    const [count] = useState(0);
    const [count1] = useState(1);

    return (
        <div className="user-card">
            <h1>COUNT : {count}</h1>
            <h1>COUNT : {count1}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Pune</h3>
            <h4>Contact : @aditi-deokar-17</h4>
        </div>
    )
}

export default User;