import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const cartStore = configureStore(
    {
        reducer:{
            cart:CartSlice.reducer
        }
    }
)

export default cartStore