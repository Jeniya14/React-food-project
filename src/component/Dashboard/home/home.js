import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Imageslide from "./Imageslides";
import Header from "../header/header";
import '../header/header.css'
import Indianfood from "./categories/Indianfood/Indianfood";
import Footer from "../footer/footer";
import Italianfood from "./categories/Italian food/Italianfood";

function Home(){
    const slides=[
        {url:'http://localhost:3000/image/slide1.jpg',title:'slide1'},
        {url:'http://localhost:3000/image/slide2.jpg',title:'slide2'},
        {url:'http://localhost:3000/image/slide4.jpg',title:'slide3'}
    ]
    
    return(
        <div className="home">
            <div className="bg">
                <Header/>
                <div className="main-slice">
                    <Imageslide slides={slides} />
                </div>
            </div>
            
        <Indianfood />
        <Italianfood />
        <Footer/>
        </div>

    )
}

export default Home