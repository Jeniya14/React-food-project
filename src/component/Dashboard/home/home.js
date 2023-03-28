import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Imageslide from "./Imageslides";
import Header from "../header/header";
import '../header/header.css'
import Indianfood from "./categories/Indianfood/Indianfood";
import Footer from "../footer/footer";
import Italianfood from "./categories/Italian food/Italianfood";
import { useSelector,useDispatch } from "react-redux";
import { getTotals } from "../cart/cartslice";
import { useEffect } from "react";
import Categories from "./categories/categories";
import Koreanfood from "./categories/korean food/Koreanfood";
function Home(){
    const cart=useSelector((state)=>state.cart)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getTotals())
    },[cart,dispatch])
    const slides=[
        { url:require("../image/slide1.jpg"),title:'slide1'},
        { url:require("../image/slide2.jpg"),title:'slide2'},
        { url:require("../image/slide3.jpg"),title:'slide3'}
    ]
    return(
        <div className="home">
            <Header/>
            <div className="bg">
                
                <div className="main-slice">
                    <Imageslide slides={slides} />
                </div>
            </div>
            <Categories />
            <div className="categories">
            <Indianfood />
         <Italianfood />
         <Koreanfood />
            </div>
         
         <Footer/>
        </div>

    )
}

export default Home