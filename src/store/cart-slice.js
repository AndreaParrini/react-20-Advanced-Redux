import { createSlice } from "@reduxjs/toolkit";

const initialStateCart={
    items:[],
    quantity:0,
    changed: false
}

const cartSlide = createSlice({
    name:'cart',
    initialState:initialStateCart,
    reducers:{
        replaceCart(state, action){
            console.log(action);
            state.quantity = action.payload.quantity;
            state.items = action.payload.items;
        },

        addItem(state, action){
            const newItem = action.payload;
            const exsistingItem = state.items.find((item) => item.id === newItem.id);
            state.changed = true;
            state.quantity++;
            if (!exsistingItem){
                state.items.push({
                    ...newItem,
                    quantity:1
                });
            }else{
                exsistingItem.quantity++;

            }

            
        },

        removeItem(state, action){
            const id = action.payload.id;
            const exsistingItem = state.items.find(item => item.id === id);

            state.quantity--;
            state.changed = true;

            if(exsistingItem.quantity > 1){
                exsistingItem.quantity--;
            }else{
                state.items = state.items.filter(item => item.id !== id);
            }
        },
    }
})



export const cartActions = cartSlide.actions;
export default cartSlide.reducer;