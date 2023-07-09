import { Link } from "react-router-dom";

const DashboardSidebar = ({setToggle}) => {
    return ( 
        <>
            <div className="dashboard-sidebar">
                <Link to={'/dashboard-admin'}>
                    <h1>Dashboard</h1>
                </Link>
                <ul>
                    <Link to={'/dashboard-admin/all-projects'} className='dashboard-link-item'><i className="bi bi-door-open-fill"></i>all projects</Link>
                    <Link to={'/dashboard-admin/all-categories'} className='dashboard-link-item'><i className="bi bi-door-open-fill"></i>all categories</Link>
                    <Link to={'/dashboard-admin/add-project'}  className='dashboard-link-item'><i className="bi bi-file-plus-fill"></i> add projects</Link>
                    <Link to={'/dashboard-admin/add-category'} className='dashboard-link-item'><i className="bi bi-file-plus-fill"></i> add categories</Link>
                </ul>
            </div>
        </>
     );
}
 
export default DashboardSidebar;