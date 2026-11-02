import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    // name hepls to understand for what the slice is created
    name: 'counter',    
    initialState:{
        value:0
    },
    reducers:{
        increment: (state) =>{
            state.value += 1
        },
        decrement: (state) =>{
            state.value -= 1
        },
        incrementby5: (state) =>{
            state.value += 5
        },
        incrementbyamount: (state,actions) =>{
            state.value += actions.payload
        }
    }
})

export const {increment,decrement,incrementby5,incrementbyamount} = counterSlice.actions
export default counterSlice.reducer