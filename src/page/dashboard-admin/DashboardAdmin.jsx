import { useEffect } from 'react';
import DashboardMain from './DashboardMain';
import DashboardSidebar from './DashboardSidebar';
import './dashboard-admin.css'



const DashboardAdmin = () => {


    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return ( 
        <>
            <div className="dashboard-admin">
                <div className="title-text">
                    <span className='process-text'>Dashboard</span>
                    <h1>Dashboard admin</h1>
                    <p><span></span>good ideai</p>
                </div>

                <div className="dashboard-wrapper-item">
                    <DashboardSidebar />
                    <DashboardMain />
                </div>
            </div>
        </>
     );
}
 
export default DashboardAdmin;