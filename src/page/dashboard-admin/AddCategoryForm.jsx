import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import Title from "../../components/title/Title";
import DashboardSidebar from "./DashboardSidebar";
import { createNewCategory } from "../../redux/apiCall/categoryApiCall";






const AddCategoryForm = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');



    
    const styling = {
        top: '10px',
        fontSize: '10px'
    }
    


    // Form Submit Handler
    const submitHandler = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            return toast.error('Category Title is required');
        }

        

        dispatch(createNewCategory({ name: title }));
        setTitle('')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return ( 
        <>
        <ToastContainer theme="colored" position="top-center" />
        
        <Title text={'Add'} title={"Add Category"} span={'Add'} />
        <div className="dashboard-container">
            <DashboardSidebar />
        <div className="dashboard-main">
            <div className="add-category">
                <h6 className="add-category-title">add new category</h6>
                
                <form onSubmit={submitHandler}>
                    <div className="add-category-form-group input">
                        <input id="text" value={title} onChange={(e) =>{ setTitle(e.target.value)}} type="text" name="name" />
                        <label style={title ? styling: null} className="lable" htmlFor="text">what's your new category</label>
                    </div>
                        <input className="add-category-btn" type="submit" value="Add" />
                </form>
            </div>
            </div>
            </div>
        </>
     );
}
 
export default AddCategoryForm;