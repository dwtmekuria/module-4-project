import { createSlice } from "@reduxjs/toolkit";

var cartSlice = createSlice(
    {
        name:"cart",
        initialState:[],
        reducers:{
            addCart:(state,action)=>{
                const existingItem = state.find((cart) => cart.id == action.payload.id)
                if (existingItem)
                    existingItem.quantity += 1;
                else
                    state.push(action.payload);
            },
            removeCart:(state,action)=>{
                return state.slice(
                    state.findIndex((cart) => cart.id == action.payload.id) + 1
                )
            }
        }
    }
); 

export default cartSlice.reducer;

export const {addCart,removeCart} = cartSlice.actions;