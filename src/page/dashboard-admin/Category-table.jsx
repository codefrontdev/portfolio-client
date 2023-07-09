import DashboardSidebar from "./DashboardSidebar";

import './project-table.css'
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCategory, getAllCategory } from "../../redux/apiCall/categoryApiCall";




const CategoryTable = () => {

    const dispatch = useDispatch();
    const { categories, isCategoryDeleted } = useSelector(state => state.category);
    
    

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch, isCategoryDeleted]);

    // delete Category Handler
    const deleteCategoryHandler = (categoryId) => {
        console.log(categoryId);
        swal({
            title: 'Are you sure?',
            text: "Once deleted, you will not be able to recover this category file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("category has been deleted!", {
                    icon: "success",
                })
                dispatch(deleteCategory(categoryId))
            } else {
                swal("Something Went Wrong!")
            }
        });
        dispatch(getAllCategory())
    }

    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return ( 
        <>
        <div className="table">
                <div className="title-text">
                    <span className='process-text'>Dashboard</span>
                    <h1>Dashboard admin</h1>
                    <p><span></span>good ideai</p>
                </div>

            <div className="table-container">
                
                <DashboardSidebar />
                <div className="table-wrapper">
                    <h1 className="table-wrapper-title">Category</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Count</th>
                                <th>title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <span className="table-title">{item.name}</span>
                                    </td>
                                    <td>
                                        <div className="table-btn-group">
                                            <button onClick={() => deleteCategoryHandler(item._id)}>
                                                Delete Project
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default CategoryTable;