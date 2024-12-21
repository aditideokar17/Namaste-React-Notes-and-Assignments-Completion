import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart = () =>{

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    const cartItems = useSelector((store)=> store.cart.items);

    return(
        <div className="m-4  p-4">
            <h1 className="text-center font-bold text-[25px]">Cart</h1>

            <div className="w-6/12 m-auto ">
                <button className="bg-red-600 text-white font-semibold px-2 py-1 rounded-sm" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1 className="mt-3 text-center font-semibold text-[20px] ">Cart is Empty! Add Items To Cart</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )

}

export default Cart;