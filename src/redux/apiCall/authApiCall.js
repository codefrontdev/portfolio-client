import { authActions } from "../slices/authSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";





// Login Admin

export function loginUser(userAdmin) {
    return async (dispatch) => {
        try {
            const { data } = await request.post('/api/portfolio/v1/login', userAdmin);

            dispatch(authActions.setLogin(data));
            localStorage.setItem('token', JSON.stringify(data));
        } catch (error) {
            
            toast.error(error.response.data.message);
        }
    }
}



// LogOut Admin

export function logoutUser() {
    return (dispatch) => {
        dispatch(authActions.setLogout());
        localStorage.removeItem('token');
    }
}