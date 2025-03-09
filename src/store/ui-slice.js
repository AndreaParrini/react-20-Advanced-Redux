import { createSlice } from "@reduxjs/toolkit";


const initialStateUI={
    isShow:false
}

const uiSlide = createSlice({
    name:'ui',
    initialState:initialStateUI,
    reducers:{
        toggleShowCart(state){
            state.isShow = !state.isShow
        }
    }
})

export const uiActions = uiSlide.actions;
export default uiSlide.reducer;