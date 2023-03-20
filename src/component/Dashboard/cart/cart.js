import React from "react";
import Header from "../header/header";
import '../cart/cart.css'
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import { addTocart, clearCartItem, decreaseCart, getTotals, removeCartItem } from "./cartslice";
function Cart(){
    const history=useHistory()
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getTotals())
    },[cart,dispatch])
    function detail(id){
        history.push(`/singledish?id=${id}`)
    }
    function remove(ele){
        dispatch(removeCartItem(ele))
    }
    function decrease(cartitem){
        dispatch(decreaseCart(cartitem))
    }
    function increase(cartItem){
        dispatch(addTocart(cartItem))
    }
    function clearcart(){
        dispatch(clearCartItem())
    }
    function order(){
        alert('Your order placed successfully!!')
        dispatch(clearCartItem())
    }
    return(
        <div className="cart-bg">
            <Header />
            <div className="cart"><h1 style={{padding:'10px'}}>Shopping cart</h1>
            {
                cart.cartItems.length===0 ?(
                    <div style={{marginBottom:'165px',padding:'10px'}}>
                        <p>Your cart is currently empty</p>
                        
                    </div>
                ) :(
                    <div className="cart-main">
                        <div className="cart-main-head">
                            <h3 className="cart-main-head-h3">Product</h3>
                            <h3>Price</h3>
                            <h3>Quantity</h3>
                            <h3>Total</h3>
                       </div>

                        {
                            cart.cartItems?.map(cartItems=>(
                                    <div key={cartItems.id} className="cart-main-body">

                                     <div className="cart-main-body-div">
                                        <img src={cartItems.url}   alt={cartItems.title} onClick={()=>detail(cartItems.id)} /> 
                                     <div style={{paddingLeft:'5px'}}>
                                     <h3 >{cartItems.title}</h3>
                                     <button onClick={()=>remove(cartItems)}>Delete</button>
                                     </div>
                                     </div>

                                     <div className="cart-main-body-div2"><h5>₹{cartItems.rate}</h5></div>

                                     <div className="quantity">
                                        <button onClick={()=>decrease(cartItems)}>-</button><span>{cartItems.cartQuantity}</span>
                                        <button onClick={()=>increase(cartItems)}>+</button>
                                     </div>

                                     <div className="cart-main-body-div2">
                                        <div style={{color:'green',fontSize:'23px'}}>₹{cartItems.cartQuantity*cartItems.rate} </div>
                                     </div>
                                    </div>
                            ))
                        }
                        <div style={{display:'flex',justifyContent:'space-between',width:'1100px',marginLeft:'10px'}}>
                            <div>
                               <button className="clearCart-button" onClick={()=>clearcart()}> Clear cart </button>
                            </div>
                            <div>
                                <p>Subtotal <span style={{fontSize:'12px'}}>*including all taxes*</span>: <b><span style={{fontSize:'23px'}}> ₹{cart.totalAmount}/-</span></b></p>
                               
                                <button className="Order-button " onClick={order}>Order</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
            <Footer />
        </div>
    )
}
export default Cart