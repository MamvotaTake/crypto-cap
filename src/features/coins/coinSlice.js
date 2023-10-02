import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    coins: [],
    isLoading: false
}

const coinSlice = createSlice({
    name: "coins",
    initialState,
    reducers: {
        getCoins(state, action) {
            state.coins = action.payload
            state.isLoading = true
        }
    }
})

export function coin() {

    return async function(dispatch, getState) {
        try {
            const host = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";
            //  const host = "http://localhost:8000/coins";
    
            const res = await fetch(`${host}`)
            const data = await res.json();
            // console.log(data)
            dispatch({type: 'coins/getCoins', payload: data})
        } catch (error) {
            
        }
    }
    
}

export const {} = coinSlice.actions

export default coinSlice.reducer