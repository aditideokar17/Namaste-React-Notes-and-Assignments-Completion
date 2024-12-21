import { useRouteError } from "react-router-dom"
const Error = () =>{

    const err = useRouteError();
    console.log(err);

    return(
        <>
        <h1>Page not found</h1>
        </>
    )
}

export default Error;