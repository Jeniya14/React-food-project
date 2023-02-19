import React from "react";
import Header from "../header/header";
import '../cart/cart.css'
import Footer from "../footer/footer";
function Cart(){
    return(
        <div className="cart-bg">
            <Header />
            <div className="cart"><h1>Cart page</h1></div>
            <Footer />
        </div>
    )
}
export default Cart