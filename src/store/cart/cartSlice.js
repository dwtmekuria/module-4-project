import { createSlice } from "@reduxjs/toolkit";

var cartSlice = createSlice(
    {
        name:"cart",
        initialState:[],
        reducers:{
            addCart:(state,action)=>{
                state.push(action.payload)
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