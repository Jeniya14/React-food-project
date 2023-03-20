import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    cartTotalQUantity:0,
    totalAmount:0
}
const cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addTocart(state,action){
            const itemIndex=state.cartItems.findIndex((ele)=>ele.id===action.payload.id);
            if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity+=1;
            }else{
                const temproduct={...action.payload,cartQuantity:1};
                state.cartItems.push(temproduct);
            }
            
        },
        removeCartItem(state,action){
           const newCart= state.cartItems.filter(
                ele=> ele.id!==action.payload.id
            );
            state.cartItems=newCart;
        },
        decreaseCart(state,action){
            const itemIndex=state.cartItems.findIndex((ele)=>ele.id===action.payload.id)
            if(state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity-=1;
            }
        },
        clearCartItem(state,action){
            state.cartItems=[];
        },
        getTotals(state,action){
           let {total,quantity}= state.cartItems.reduce((cartTotal,ele)=>{
                const {rate,cartQuantity}=ele;
                const itemTotal=rate*cartQuantity;

                cartTotal.total+=itemTotal
                cartTotal.quantity+=cartQuantity

                return cartTotal
            },{
                total:0,
                quantity:0
            })
            state.totalAmount=total;
            state.cartTotalQUantity=quantity
        },
    }
})

export const {addTocart,removeCartItem,decreaseCart,clearCartItem,getTotals} =cartslice.actions;
export default cartslice.reducer