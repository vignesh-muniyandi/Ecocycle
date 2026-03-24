import { createSlice } from "@reduxjs/toolkit";
 

const initialState ={
    cycleCartItems :JSON.parse(localStorage.getItem("cycleCartItems")) || [],
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


export  const {addToCart ,updateQuantity ,removeFromCart ,calculateTotal}=cartSlice.actions;
export default cartSlice.reducer;