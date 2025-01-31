import { useDispatch, useSelector } from "react-redux";
import cartItems from "../data/cartData"
import { Decrement, Increment } from "../Store/CartSlice";
const CartItems = ()=>{
    const dispatch = useDispatch()
    return(
        <>
        <ul className="list">
            {
                cartItems.map((item)=>{
                    return(
                    <li key={item.id}> {item.title} 
                        <span className="mx-4">Price : ${item.price}  </span>
                        <span className="mx-4">
                        <button className="btn btn-sm btn-primary mx-1" onClick={()=>dispatch(Decrement(item))}> -</button>
                        {0}
                        <button className="btn btn-sm btn-primary mx-1" onClick={()=>dispatch(Increment(item))}> +</button>
                        </span>
                    </li>
                    )
                })
            
            }
        </ul>
        </>
    )
}
export default CartItems