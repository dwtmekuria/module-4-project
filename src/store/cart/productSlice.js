import { createSlice } from "@reduxjs/toolkit";

var productSlice = createSlice(
    {
        name:"product",
        initialState:[
            {
                id: 1,
                title: "Product 1",
                description: "something something something",
                price: 250,
            },
            {
                id: 2,
                title: "Product 2",
                description: "something something something",
                price: 250,
            },
            {
                id: 3,
                title: "Product 3",
                description: "something something something",
                price: 250,
            },
            {
                id: 4,
                title: "Product 4",
                description: "something something something",
                price: 250,
            }
        ],
        reducers:{
            addProduct:(state,action)=>{
                state.push({
                    id: state.length + 1,
                    title: action.payload.title,
                    description: action.payload.description,
                    price: parseFloat(action.payload.price),
                });

            },
            removeProduct:(state, action) => {
                return state.filter(product => product.id !== action.payload);
            }

        }
    }
)

export default productSlice.reducer;

export const { addProduct,removeProduct } = productSlice.actions;