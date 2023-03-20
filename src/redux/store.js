import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../component/Dashboard/cart/cartslice";

export default configureStore({
    reducer:{
        cart:cartslice,
    }
})
