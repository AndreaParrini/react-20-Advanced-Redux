import { createSlice } from "@reduxjs/toolkit";


const initialStateCart={
    items:[],
    quantity:0,
}

const cartSlide = createSlice({
    name:'cart',
    initialState:initialStateCart,
    reducers:{
        addItem(state, action){
            const newItem = action.payload;

            const exsistingItem = state.items.findIndex(item => item.id === newItem.id);
            state.quantity++;
            if (exsistingItem === -1){
                state.items.push({
                    ...newItem,
                    quantity:1
                });
            }else{
                state.items[exsistingItem].quantity++

            }

            
        },
        removeItem(state, action){
            const id = action.payload.id;
            const exsistingItem = state.items.findIndex(item => item.id === id);

            state.quantity--;

            if(state.items[exsistingItem].quantity > 1){
                state.items[exsistingItem].quantity--;
            }else{
                state.items = state.items.filter(item => item.id !== id);
            }
        },
    }
})

export const cartActions = cartSlide.actions;
export default cartSlide.reducer;