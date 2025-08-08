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
                removeCart: (state, action) => {
                    const existingItem = state.findIndex(item => item.id === action.payload.id);
                    if (existingItem !== -1) {
                        if (state[existingItem].quantity > 1) {
                            state[existingItem].quantity -= 1;
                        } else {
                            state.splice(existingItem, 1); 
                        }
                    }
            }
        }
    }
); 

export default cartSlice.reducer;

export const {addCart,removeCart} = cartSlice.actions;