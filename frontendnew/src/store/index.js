import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallery";

const store = configureStore({
    reducer:{
        gallery:gallerySlice.reducer
    }
});

export default store;