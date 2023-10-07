import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import coinApi from "../../api/coinApi"

export const fetchCoins = createAsyncThunk("coins/fetchAll", async () => {
    const response = await coinApi.fetchAll();
    
    return response;
})

export const coinsAdapter = createEntityAdapter();

const initialState = coinsAdapter.getInitialState({ isLoading: false });

export const slice = createSlice({
    name: 'coins',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCoins.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchCoins.fulfilled, (state, action) => {
            coinsAdapter.setAll(state, action.payload);
            state.isLoading = false;
        });
    }
});

const reducer = slice.reducer;
export default reducer; 

export const {
    selectById: selectCoinById,
    selectIds: selectCoinIds,
    selectEntities: selectCoinEntities,
    selectAll: selectAllCoins,
    selectTotal: selectTotalCoins
} = coinsAdapter.getSelectors(state => state.coins)

