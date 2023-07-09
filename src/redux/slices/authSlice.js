import { createSlice } from "@reduxjs/toolkit";




const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userAdmin: localStorage.getItem('token') ? 
        JSON.parse(localStorage.getItem('token')) : null,
    },
    reducers: {
        setLogin(state, action) {
            state.userAdmin = action.payload;
        },
        setLogout(state) {
            state.userAdmin = null;
        },
    }
});


const authReducer = authSlice.reducer;
const authActions = authSlice.actions;


export { authActions, authReducer };