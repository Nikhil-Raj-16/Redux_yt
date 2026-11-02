import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const searchSlice = createSlice({
    name : "search",
    initialState:{
        query:'',
        activeTab:'photos',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
            state.query = action.payload
        },
        setActiveTabs(state,action){
            state.activeTab = action.payload
        },
        setResults(state,action){
            state.results = action.payload
            state.loading = false
        },
        setLoading(state){
            state.loading = true
            state.error = null
        },
        setError(state,action){
            state.error = action.payload
            state.loading = false
        },
        clearResults(state){
            state.results = []
        }

        // loading dikhegi toh error nahi milega
        //and agar results and ya error milega toh loading nahi hogi
    }
})

export const {setQuery, setActiveTabs,setError, setResults,setLoading,clearResults} = searchSlice.actions

export default searchSlice.reducer;