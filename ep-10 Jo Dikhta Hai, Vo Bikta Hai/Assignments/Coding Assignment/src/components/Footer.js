
// Footer Component
const Footer = () =>{
    return(
        <div className="my-3 mx-3 flex items-center justify-between h-[150px] shadow-lg border-2 bg-[#ff914d]">
         <div className="ml-3 font-semibold text-white">&copy; 2024 Reserved</div>   
         <div className="address">
            <p className="font-semibold text-white">Address</p>
            <p className="font-semibold text-white">Piazza Montanari 835, San Guido, RA 61627</p>
         </div>
         <div className="mr-3">
            <p className="font-semibold text-white">Contact</p>
            <p className="font-semibold text-white">706.758.2600x209</p>
            <p className="font-semibold text-white">namastefood@order.com</p>
         </div>
        </div>
    )
}

export default Footer;