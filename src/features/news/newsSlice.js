import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const fetchAll = createAsyncThunk('news/fetchAll', async () => {
    const response = await newsAPI.fetchAll();
    return response;
})

export const newsAdapter = createEntityAdapter();

const initialState = newsAdapter.getInitialState({ isLoading: false })

const slice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAll.pending, (state, action) => {
            state.isLoading = true
        });

        builder.addCase(fetchAll.fulfilled, (state, action) => {
            newsAdapter.setAll(state, action.payload)
            state.isLoading = false
        })
    }
})