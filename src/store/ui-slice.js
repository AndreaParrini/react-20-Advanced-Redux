import { createSlice } from "@reduxjs/toolkit";


const initialStateUI={
    isShow:false,
    notification: null
}

const uiSlide = createSlice({
    name:'ui',
    initialState:initialStateUI,
    reducers:{
        toggleShowCart(state){
            state.isShow = !state.isShow
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiActions = uiSlide.actions;
export default uiSlide.reducer;