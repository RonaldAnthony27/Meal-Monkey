import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items:[],
    } ,
    reducers:{
        addItem: (state, action) => {
    
            state.items.push(action.payload) //mutating the above state
        },
        
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => {
              return item?.info?.id !== action.payload;
            });
          },
    clearCart: (state, action) => {
        state.items = [];
    }
    }  
})
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;