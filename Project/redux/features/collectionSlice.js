import { createSlice } from "@reduxjs/toolkit";
import { toast, Flip } from 'react-toastify';

const initialState = {
    items:JSON.parse(localStorage.getItem('collection')) || []
}


const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers:{
        addCollection:(state,action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )

            if(!alreadyExists){  // nahi karti exists toh push kardo
                state.items.push(action.payload)
                localStorage.setItem('collection',JSON.stringify(state.items))
                // console.log("add huwa naya item");
            }
            // else{
            //     console.log("add nahi huwa existing item");
                
            // } 
        },
        removeCollection:(state,action) => {
            // uni ko bachana jiske pehle se id exist nahi karti hai
            
            state.items = state.items.filter(
                item => item.id !== action.payload
                
            )
            localStorage.setItem('collection',JSON.stringify(state.items))
        },
        clearCollection:(state) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast: () => {
            toast.success('Saved To Collection!', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
        },
        removeToast: () => {
            toast.error('Removed From Collection!', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
        }

    }
})

export const {addCollection,removeCollection,clearCollection,addedToast,removeToast} = collectionSlice.actions;

export default collectionSlice.reducer