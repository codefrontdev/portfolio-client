import { Link } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

import './project-table.css'
import swal from "sweetalert";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProject } from "../../redux/apiCall/projectApiCall";

const ProjectTable = () => {


    
    const dispatch = useDispatch();
    const { projects } = useSelector(state => state.project);


    // delete Project Handler
    const deleteProjectHandler = () => {
        swal({
            title: 'Are you sure?',
            text: "Once deleted, you will not be able to recover this project file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("project has been deleted!", {
                    icon: "success",
                })
            } else {
                swal("Something Went Wrong!")
            }
        })
    }



    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getAllProject())
    }, [dispatch]);


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
                    <h1 className="table-wrapper-title">Projects</h1>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Count</th>
                                <th>Project</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((item, i) => (
                                <tr key={item._id}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <div className="table-image">
                                            <img src={item.image.url} alt="" className="table-project-image" />
                                            <span className="table-title">{item.title.slice(0, 15)}...</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-btn-group">
                                            <button>
                                                <Link to={`/works/details/${item._id}`}>
                                                    View Project
                                                </Link>
                                            </button>
                                            <button onClick={deleteProjectHandler}>
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
 
export default ProjectTable;