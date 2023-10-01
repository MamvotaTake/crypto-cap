import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./features/coins/coinSlice";
import newsSlice from "./features/news/newsSlice";

const store = configureStore({
    reducer: {
        coin: coinSlice,
        news: newsSlice
    }
});

console.log(store)

export default store;