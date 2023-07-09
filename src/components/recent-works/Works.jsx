import Card from './Card';
import './works.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProject } from '../../redux/apiCall/projectApiCall';
import Title from '../title/Title';


const Works = () => {

    const dispatch = useDispatch();
    const { projects } = useSelector(state => state.project);

    


    useEffect(() => {
        dispatch(getAllProject(1));
    }, [dispatch]);


    return ( 
        <>
            <section className="works">
                <Title text={'works'} title={"recent works"} span={'works'} />

                <div className="card-works">
                    <div className="one-content-card">
                        <Card projects={projects?.slice(0, 2)}  />
                    </div>
                    <div className="tow-content-card">
                        <Card projects={projects?.slice(2, 4)} />
                    </div>
                </div>
                <div className="btn-link">
                    <Link to="/works">View more <i className="bi bi-arrow-right"></i></Link>
                </div>
            </section>
        </>
     );
}
 
export default Works;