import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { projectReducer } from "./slices/projectSlice";
import { categoryReducer } from "./slices/categorySlice";




const store = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer,
        category: categoryReducer,
    }
});

export default store;