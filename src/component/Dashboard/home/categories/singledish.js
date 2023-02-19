import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Food1 from "../../../foodimage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import '../categories/categories.css'
function Singledish(){
    const location=useLocation();
    const [detail,setdetail]=useState({})
    useEffect(()=>{
        let data = Food1.filter((ele)=>ele.id==query.get('id'));
        console.log(data)
        setdetail(data[0])
    },[])
    let query = new URLSearchParams(location.search)
    const history =useHistory()
    function backToHome(){
        history.push('/home')
    }
    return(
        <>
        <div className="sfp-bg">
        <Header />
        <button className="backHome" onClick={backToHome}>
          <span style={{fontSize:'20px',paddingRight:'5px'}}>←</span>  Home
        </button>
        <div className="sfp-main">
            <div className="sfp-first">
                <img src={detail.url}></img><br />
               
            </div>
            <div className="spf-second">
            <h1>{detail.title}</h1>
            <h3>[{detail.quantity}]</h3>
            <br />
            <h1 >₹{detail.rate}</h1>
            <p><span >Description:</span><br />{detail.description}</p>
            <div><span>Available Only At :</span><p>9am to 9pm</p></div>
            <br />
            <button> + Add to Cart</button>
            <button style={{marginLeft:'20px'}}>Order</button>
            </div>
        </div>
        <Footer />
        </div>
        </>
    )
}
export default Singledish