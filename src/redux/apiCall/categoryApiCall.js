import { categoryActions } from "../slices/categorySlice";
import request from "../../utils/request";
import { toast } from "react-toastify";




// get All Categories

export function getAllCategory() {
    return async (dispatch) => {
        try {
            const { data } = await request.get('/api/portfolio/v1/category');

            dispatch(categoryActions.setCategories(data.data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}






// create new Category

export function createNewCategory(newCategory) {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.post('/api/portfolio/v1/category', newCategory, {
                headers: {
                    Authorization: "Bearer " + getState().auth.userAdmin.message,
                }    
            });    
            
            
            dispatch(categoryActions.createNewCategory(data));
            toast.success("category created successfully")
        } catch (error) {
            
            toast.error(error.response.data.message);
        }    
    }    
}    





// Delete new Category

export function deleteCategory(categoryId) {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.delete(`/api/portfolio/v1/category/${categoryId}`, {
                headers: {
                    Authorization: "Bearer " + getState().auth.userAdmin.message,
                }
            });

            
            dispatch(categoryActions.deleteCategory(data.categoryId));
            toast.success("category deleted successfully");
            
            setTimeout(() => dispatch(categoryActions.isCategoryDeletedTrue(), 3000));
        } catch (error) {
            
            toast.error(error.response.data.message);
        }
    }
}
