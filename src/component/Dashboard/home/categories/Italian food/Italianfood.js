import React from "react";
import '../categories.css'
function Italianfood(){
    const food2=[
        {id:2.1,
            url:'http://localhost:3000/image/italifood-1.jpg',
            rate:'300',
            title:'Spaghetti',
            quantity:'2 pieces',
            star:4.5},
        {id:2.2,
            url:'http://localhost:3000/image/italifood-2.jpg',
            rate:'250',
            title:'Lasagna',
            quantity:'1 Serve',
            star:4.5},
        {id:2.3,
            url:'http://localhost:3000/image/italifood-3.jpg',
            rate:'500',
            title:' Risotto milanese',
            quantity:'1 serve',
            star:5},
        {id:2.4,
                url:'http://localhost:3000/image/italifood-4.jpg',
                rate:'700',
                title:'Ratatouille',
                quantity:'2 serve',
                star:4.5},
        {id:2.5,
                 url:'http://localhost:3000/image/italifood-5.jpg',
                rate:'200',
                title:'Tiramisu',
                quantity:'1 serve',
                star:4.5},
        {id:2.6,
                url:'http://localhost:3000/image/italifood-6.jpg',
                rate:'439',
                title:'Frittata',
                quantity:'2 serve',
                star:4.5},]
            
    function prevImage(){
        let box=document.querySelector('.itali-card-image')
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }
    function nextImage(){
        let box=document.querySelector('.itali-card-image')
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft+width;
    }
    return(
        <div className="indi-css">
            <h3>Italian Food</h3>
            <div className="main-image">
        <button className="leftImageArrowStyles" onClick={()=>prevImage()}> ❰❰ </button>
            <button className="rightImageArrowStyles" onClick={()=>nextImage()}> ❱❱</button>
        <div className="itali-card-image" >
            {
                food2.map((ele)=>{
                    return <div key={ele.id} className='Perslide'>
                    <img src={ele.url} alt={ele.title}></img>
                    <p>{ele.title}{' '}[{ele.quantity}]</p>
                    <span style={{display:'block'}}>₹{ele.rate}</span>
                    <button className="slide-cart-button">Order</button>{'  '}<button className="slide-cart-button">Add toCart</button>
                </div>
                })
            }
    <a href="#">See more</a>
        </div>
        </div>
        </div>
    )
}
export default Italianfood