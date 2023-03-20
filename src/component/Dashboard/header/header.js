import React from "react";
import logo from '../image/food.png'
import cartimg from '../image/cart.jpg'
import '../header/header.css'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Header(){
    const {cartTotalQUantity}=useSelector((state)=>state.cart)
    let history=useHistory()
    function AddCart(){
        history.push('/cart')
    }
    function Profile(){
        history.push('/profile')
    }
    function gotoHome(){
        history.push('/home')
    }
    function Logout(){
        history.push('login')
    }
    return(
        <div className="header">
            <img src={logo} className='logo'></img>
            <div><input type='text' className="search-input"/><button >Search</button></div>

            <div style={{position:'relative',width:'100px'}}><button className="cart-button" onClick={AddCart}><img  src={cartimg}></img></button>
            <span className="msg"> {cartTotalQUantity}</span></div>
             {' '}
            <button className="cart-button" ><p style={{color:"white",marginTop:'12px'}} onClick={gotoHome}>Home</p></button>
            <button className="cart-button"  ><p style={{color:"white",marginTop:'12px'}} onClick={Profile}>Profile</p></button>  
            <button className="cart-button"  ><p style={{color:"white",marginTop:'12px'}} onClick={Logout}>Log out</p></button>  
        </div>
    )
}

export default Header