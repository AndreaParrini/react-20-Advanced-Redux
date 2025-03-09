import { createSlice } from "@reduxjs/toolkit";


const initialStateCart={
    quantity:0,
}

const cartSlide = createSlice({
    name:'cart',
    initialState:initialStateCart,
    reducers:{
        addItem(state){
            state.quantity++;
        },
        removeItem(state){
            if(state.quantity > 0){
                state.quantity--;
            }
        },
    }
})

export const cartActions = cartSlide.actions;
export default cartSlide.reducer;