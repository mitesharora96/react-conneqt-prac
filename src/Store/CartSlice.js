import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cartSlice',
    initialState:{cartItems:0,cartAmount:0},
    reducers:{
        Increment:(state,action)=>{
            state.cartItems++
            console.log(action)
            state.cartAmount+=parseInt(action.payload.price)
            return state
        },
        Decrement:(state,action)=>{
            state.cartItems--
            state.cartAmount-=parseInt(action.payload.price)
            return state
        },
        Reset:(state, action)=>{
            state.cartItems=0
            state.cartAmount=0
        }
    }
})

export const {Increment,Decrement,Reset} = CartSlice.actions
export default CartSlice