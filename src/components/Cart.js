import { useSelector } from "react-redux";

const Cart=()=>{
    const cart = useSelector((state) => state.cart.cartItems);
    return (
        <>
        <h2>Cart has {cart} items</h2>
        </>
    )
}
export default Cart