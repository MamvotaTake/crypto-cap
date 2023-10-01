import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    news: {},
    loading: false,
})

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        
    }

})

export default newsSlice.reducer