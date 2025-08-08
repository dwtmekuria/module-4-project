import { createSlice } from "@reduxjs/toolkit";

var cartSlice = createSlice(
    {
        name:"cart",
        initialState:[],
        reducers:{
            addCart:(state,action)=>{
                const existingItem = state.find((item) => item.id == action.payload.id)
                if (existingItem)
                    existingItem.quantity += 1;
                else
                    state.push(action.payload);
            },
                decreaseCart: (state, action) => {
                    const existingItem = state.findIndex(item => item.id === action.payload.id);
                    if (existingItem !== -1) {
                        if (state[existingItem].quantity > 1) {
                            state[existingItem].quantity -= 1;
                        } else {
                            state.splice(existingItem, 1); 
                        }
                    }
            },
            removeCart: (state, action) => {                   
                return state.filter(cart => cart.id !== action.payload.id);}
        }
    }
); 

export default cartSlice.reducer;

export const {addCart,decreaseCart,removeCart} = cartSlice.actions;