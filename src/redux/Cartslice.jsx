import { createSlice } from "@reduxjs/toolkit";
 

const initialState ={
    cycleCartItems :JSON.parse(localStorage.getItem("cycleCartItems")) || [],
   LikeCartItems  :JSON.parse(localStorage.getItem("LikeCartItems")) || [],
    totalAmount :0,
}

const cartSlice =createSlice(
    {
        name:"cart",
        initialState,
        reducers:{
            addToCart:(state ,action) =>{
                const item =action.payload;
                const existingItem= state.cycleCartItems.find(i => i.id === item.id);

                if (existingItem){
                    existingItem.quantity +=1;
                }else{
                    state.cycleCartItems.push({...item ,quantity : 1});
                }
                localStorage.setItem("cycleCartItems" ,JSON.stringify(state.cycleCartItems))
                
            },
            addFavourite:(state,action)=>{
                const item =action.payload;
                const existingItem=state.LikeCartItems.find(i => i.id ===item.id);

                if(existingItem){
                    existingItem.quantity +=1;
                }else{
                    state.LikeCartItems.push({...item ,quantity :1});
                }
                localStorage.setItem("LikeCartItems",JSON.stringify(state.LikeCartItems));
            },

            
            addCartFromFavourite:( state,action)=>{
            
                 const item = action.payload;
                 const existingItem = state.cycleCartItems.find(
                   (i) => i.id === item.id,
                 );

                 if (existingItem) {
                   existingItem.quantity += 1;
                 } else {
                   state.cycleCartItems.push({ ...item, quantity: 1 });
                 }
                   state.LikeCartItems = state.LikeCartItems.filter(
                     (i) => i.id !== action.payload.id,
                   );
              localStorage.setItem(
                "LikeCartItems",
                JSON.stringify(state.LikeCartItems),
              );
            },
            updateQuantity:(state ,action)=>{
                const {id ,change} =action.payload;
                const item =state.cycleCartItems.find(i =>i.id ===id);

                if(item ) {
                    item.quantity += change;
                    if(item.quantity <1){
                        item.quantity =1; //prevent going below
                    }
                }
                localStorage.setItem(
                  "cycleCartItems",
                  JSON.stringify(state.cycleCartItems),
                );

            },
            DisLikeCartProduct:(state ,action)=>{
                 state.LikeCartItems = state.LikeCartItems.filter(
                   (i) => i.id !== action.payload,
                 );
                 localStorage.setItem(
                   "cycleCartItems",
                   JSON.stringify(state.LikeCartItems),
                 );

            },
            removeFromCart:(state ,action) =>{
                state.cycleCartItems=state.cycleCartItems.filter(i => i.id !== action.payload);
                localStorage.setItem(
                  "cycleCartItems",
                  JSON.stringify(state.cycleCartItems),
                );

            },
            calculateTotal:(state)=>{
               state.totalAmount = state.cycleCartItems.reduce(
                 (sum, item) => sum + item.price * item.quantity,
                 0
               );
            },

        }
    }
);


export  const {addToCart ,updateQuantity ,removeFromCart ,calculateTotal ,addFavourite ,addCartFromFavourite ,DisLikeCartProduct}=cartSlice.actions;
export default cartSlice.reducer;