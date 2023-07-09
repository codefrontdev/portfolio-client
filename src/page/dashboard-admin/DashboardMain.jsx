import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountProject } from "../../redux/apiCall/projectApiCall";

const DashboardMain = ({props}) => {

    const dispatch = useDispatch();
    
    const { categories } = useSelector(state => state.category)

    

    
    
    useEffect(() => {
        dispatch(getCountProject())
        window.scrollTo(0, 0);
    }, [dispatch])

    return ( 

        <>
            <div className="dashboard-container">
                <div className="dashboard-main">
                    <div className="dashboard-main-header">
                        <div className="dashboard-main-card">
                            <h5 className="dashboard-card-title">Projects</h5>
                            <div className="dashboard-card-count">4</div>
                            <div className="dashboard-card-link-wrapper">
                                <Link to={'/dashboard-admin/all-projects'} className="dashboard-card-link">
                                    See all Projects
                                </Link>
                                <div className="dashboard-card-icon">
                                    <i className="bi bi-card-checklist"></i>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-main-card">
                            <h5 className="dashboard-card-title">Categorries</h5>
                            <div className="dashboard-card-count">{categories?.length}</div>
                            <div className="dashboard-card-link-wrapper">
                                <Link to={'/dashboard-admin/all-categories'} className="dashboard-card-link">
                                    See all categories
                                </Link>
                                <div className="dashboard-card-icon">
                                    <i className="bi bi-tag"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
{/*             
)
        } */}
        </>
     );
}
 
export default DashboardMain;