import { useDispatch, useSelector } from "react-redux";
import { Reset } from "../Store/CartSlice";

const TotalCart=()=>{
    const cart = useSelector((state) => state.cart.cartAmount);
    const dispatch = useDispatch()
    return (
        <>
        <h3 className="my-4">
            Your total cart value is ${cart}
            <button onClick={()=>dispatch(Reset())} className="btn btn-danger mx-4">Reset</button>
        </h3>
        </>
    )
}

export default TotalCart