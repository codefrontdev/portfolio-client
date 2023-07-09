import Card from '../../components/recent-works/Card';
import './work-page.css';
import SayHi from './SayHi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProject } from '../../redux/apiCall/projectApiCall';
import { getAllCategory } from '../../redux/apiCall/categoryApiCall';


const WorkPage = () => {


    
    const [cate, setCate] = useState('')

    const dispatch = useDispatch();
    const { projects } = useSelector(state => state.project);
    const { categories } = useSelector(state => state.category);




    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getAllProject(null, cate));
        dispatch(getAllCategory());
    }, [dispatch, cate]);
    return ( 
        <>
            <div className="work-page">
                <div className="title-text">
                    <span className="process-text">works</span>
                    <h1>recent works</h1>
                    <p><span></span> works</p>
                </div>
                <div className="work-wrapper-page">
                    <div className="work-page-filter">
                                <button  onClick={() => setCate('')} 
                                className={`${!cate? 'button active': 'button'}`} to={''}>
                                    All Project
                                </button>
                        {
                            categories.map(category => (
                                <button onClick={() => setCate(category.name)} key={category._id} 
                                className={`${cate === category.name ? 'button active': 'button'}`}
                                >
                                    {category.name}
                                </button>
                            ))
                        }
                    </div>
                    <div className="work-page-content">
                        <Card projects={projects} />
                    </div>
                </div>
                <SayHi />
            </div>
        </>
     );
}
 
export default WorkPage;