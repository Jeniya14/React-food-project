import React from "react";
import logo from '../image/food.png'
import cart from '../image/cart.jpg'
import '../header/header.css'
import { useHistory } from "react-router-dom";

function Header(){
    let history=useHistory()
    function AddCart(){
        history.push('/cart')
    }
    return(
        <div className="header">
            <img src={logo} className='logo'></img>
            <div><input type='text' className="search-input"/><button >Search</button></div>
            <button className="cart-button" onClick={AddCart}><img  src={cart}></img> </button>{' '}
            <button className="cart-button"  ><p style={{color:"white",marginTop:'12px'}}>Profile</p></button>
        </div>
    )
}

export default Header