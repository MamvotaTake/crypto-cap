import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./coins/coinSlice";
import newsSlice from "./news/newsSlice";

const store = configureStore({
    reducer: {
        coin: coinSlice,
        news: newsSlice
    }
});

console.log(store)

export default store;