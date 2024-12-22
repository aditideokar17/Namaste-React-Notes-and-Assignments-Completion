const Contact = () =>{
    return(
        <div>
            <h1 className="font-bold m-4 p-4 text-xl text-center">Contact Page</h1>
            <form className=" text-center flex justify-center gap-5">
                <input type="text" className="border border-gray-500 p-2" placeholder="name"></input>
                <input type="text" className="border border-gray-500 p-2" placeholder="message"></input>
                <button className="border border-gray-300 outline-none bg-slate-700 text-white font-bold p-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact;