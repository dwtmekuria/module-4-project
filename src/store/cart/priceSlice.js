import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:"price",
        initialState:0,
        reducers:{
            add:(state,action)=>
                state + action.payload,
            remove:(state,action)=>
                state - action.payload
            
        },
            
    }
); 

export default cartSlice.reducer;

export const { add,remove } = cartSlice.actions;