import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./coins/coinsSlice"

export default configureStore({
    reducer: {
        coins: coinsReducer,
        // news: newsSlice
    }
});
