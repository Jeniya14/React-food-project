import React, { useState } from "react";
import '../categories.css';
import Food1 from "../../../../foodimage";
import { useHistory } from "react-router-dom";
function Indianfood(){
    const [quantity,setquantity]=useState(1)
    let history=useHistory();
    function decree(){
        setquantity(quantity-1)
    }
    function incree(){
        setquantity(quantity+1)
    }
    function AddtoCart(){
        history.push('/cart')
    }
    function prevImage(){
        let box=document.querySelector('.card-image')
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }
    function nextImage(){
        let box=document.querySelector('.card-image')
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft+width;
    }
    function detail(id){
        history.push(`/singledish?id=${id}`)
    }
    return(
        <div className="indi-css">
             <h2>Categories</h2>
             <h3>Indian Food</h3>
        <div className="main-image">
        <button className="leftImageArrowStyles" onClick={()=>prevImage()}> ❰❰</button>
            <button className="rightImageArrowStyles" onClick={()=>nextImage()}> ❱❱</button>
        <div className="card-image" >
            {
                Food1.map((ele)=>{
                    return <div key={ele.id} className='Perslide' >
                    <img src={ele.url} alt={ele.title} onClick={()=>detail(ele.id)}></img>
                    <p>{ele.title}{' '}[{ele.quantity}] <button className="quantity-button" onClick={(e)=>decree(e.target.value)}>-</button>{quantity}<button className="quantity-button" onClick={(e)=>incree(e.target.value)}>+</button>
                    </p>
                    
                    <span style={{display:'block'}}>₹{ele.rate}</span>
                    <button className="slide-cart-button" >Order</button>{'  '}<button className="slide-cart-button" onClick={AddtoCart}>Add toCart</button>
                </div>
                })
            }
           <a href="#" style={{textDecoration:'none',color
        :'black'}}>See more...</a>
        </div>
        </div>
        
        </div>
    )
}

export default Indianfood