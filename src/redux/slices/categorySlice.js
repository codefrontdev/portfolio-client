import { createSlice } from "@reduxjs/toolkit";




const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        isCategoryDeleted: false,
    },
    reducers: {
        createNewCategory(state, action) {
            state.categories.push(action.payload);
        },
        setCategories(state, action) {
            state.categories = action.payload
        },
        deleteCategory(state, action) {
            console.log(action.payload);
            state.categories = state.categories.filter(c => c._id !== action.payload);
            state.isCategoryDeleted = true;
        },
        isCategoryDeletedTrue(state) {
            state.isCategoryDeleted = false;
        },
    }
});


const categoryReducer = categorySlice.reducer;
const categoryActions = categorySlice.actions;


export { categoryActions, categoryReducer };