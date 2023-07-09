import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { createNewProject } from "../../redux/apiCall/projectApiCall";
import DashboardSidebar from "./DashboardSidebar";
import Title from "../../components/title/Title";
import { getAllCategory } from "../../redux/apiCall/categoryApiCall";



const AddProjectForm = () => {

    const dispatch = useDispatch();
    const { loading, isProjectCreated } = useSelector(state => state.project);
    const { categories } = useSelector(state => state.category);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [linkGithub, setLinkGithub] = useState('');
    const [linkPreviou, setLinkPreviou] = useState('');
    const [linkYoutube, setLinkYoutube] = useState('');
    const [category, setCategory] = useState('');
    const [technology, setTechnology] = useState('');
    const [timeCompletProject, setTimeCompletProject] = useState('');
    const [image, setImage] = useState(null);


    
    const styling = {
        top: '10px',
        fontSize: '10px'
    }



    // Form Submit Handler
    const submitHandler = (e) => {
        e.preventDefault();

        if (title.trim() === '') return toast.error('Title is required');
        if (description.trim() === '') return toast.error('description is required');
        if (linkGithub.trim() === '') return toast.error('link github Title is required');
        if (linkPreviou.trim() === '') return toast.error('link previou  is required');
        if (linkYoutube.trim() === '') return toast.error('link youtube  is required');
        if (category.trim() === '') return toast.error('Category is required');
        if (technology.trim() === '') return toast.error('Technology is required');
        if (timeCompletProject.trim() === '') return toast.error('timeCompletProject is required');
        if (!image) return toast.error('image is required');


        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('linkGithub', linkGithub);
        formData.append('linkPreviou', linkPreviou);
        formData.append('linkYoutube', linkYoutube);
        formData.append('category', category);
        technology.split(',').forEach((item) => formData.append("technology[]", item))
        formData.append('timeCompletProject', timeCompletProject);
        formData.append('image', image);
        dispatch(createNewProject(formData));
    }
    
    
    
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(getAllCategory());
        if (isProjectCreated) {
            navigate('/');
        }
    }, [isProjectCreated, navigate, dispatch]);

    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    
    return ( 
        <>
        <ToastContainer theme="colored" position="top-center" />
            <Title text={'Add'} title={"Add project"} span={'Add'} />
        <div className="dashboard-container">
                <DashboardSidebar />
        <div className= "dashboard-main">
            <div className="add-category">
                <h6 className="add-category-title">add new project</h6>
                
                <form onSubmit={submitHandler}>
                    <div className="add-category-form-group">
                        <div className="input">
                            <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" />
                            <label style={title ? styling : null} htmlFor="title" className="lable">what's your title?</label>
                        </div>
                        <div className="input">
                            <input id="description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" />
                            <label style={description ? styling : null} htmlFor="description" className="lable">what's your description?</label>
                        </div>
                        <div className="input">
                            <input id="linkGithub" value={linkGithub} onChange={(e) => setLinkGithub(e.target.value)} type="text" name="linkGithub" />
                            <label style={linkGithub ? styling : null} htmlFor="linkGithub" className="lable">what's your link Github?</label>
                        </div>
                        <div className="input">
                            <input id="linkPreviou" value={linkPreviou} onChange={(e) => setLinkPreviou(e.target.value)} type="text" name="linkPreviou" />
                            <label style={linkPreviou ? styling : null} htmlFor="linkPreviou" className="lable">what's your link Previou?</label>
                        </div>
                        <div className="input">
                            <input id="linkYoutube" value={linkYoutube} onChange={(e) => setLinkYoutube(e.target.value)} type="text" name="linkYoutube" />
                            <label style={linkYoutube ? styling : null} htmlFor="linkYoutube" className="lable">what's your linkYoutube?</label>
                        </div>
                        <div className="input">
                            <select className="category" value={category}
                                onChange={(e) => setCategory(e.target.value)}>
                                    <option disabled value="">Select A Category</option>
                                { 
                                    categories.map((item) => 
                                    <option key={item._id} value={item.name}>{item.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="input">
                            <input id="technology" value={technology} onChange={(e) => setTechnology(e.target.value)} type="text" name="technology" />
                            <label style={technology ? styling : null} htmlFor="technology" className="lable">what's your technology?</label>
                        </div>
                        <div className="input">
                            <input id="timeCompletProject" value={timeCompletProject} onChange={(e) => setTimeCompletProject(e.target.value)} type="text" name="timeCompletProject" />
                            <label style={timeCompletProject ? styling : null} htmlFor="timeCompletProject" className="lable">what's your timeCompletProject?</label>
                        </div>
                        <div className="input">
                            <input onChange={(e) => setImage(e.target.files[0])} type="file" name="image" />
                            
                        </div>
                    </div>
                        <input className="add-category-btn" type="submit" value={ loading ? "Loading..." : "Add"} />
                </form>
            </div>

        </div>
        </div>
        </>
     );
}
 
export default AddProjectForm;