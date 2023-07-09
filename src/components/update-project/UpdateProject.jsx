import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateProject, updateProjectImage } from "../../redux/apiCall/projectApiCall";


const UpdateProject = ({update}) => {

    const { id } =useParams()
    const dispatch = useDispatch();
    const { loading, isProjectCreated } = useSelector(state => state.project);

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
        
        let update = {}
        const formData = new FormData();
        
        if (title.trim() !== '')  {
            
            update.title = title
        } else {

            return toast.error('title  is required');
        }

        if (description.trim() !== '')  {
            
            update.description = description;

        } else {

            return toast.error('description  is required');

        }

        if (linkGithub.trim() !== '')  {

            update.linkGithub = linkGithub;

        } else {

            return toast.error('link github  is required');
            
        }

        if (linkPreviou.trim() !== '')  {
            
            update.linkPreviou = linkPreviou;
            
        } else {

            return toast.error('link previou  is required');
            
        }

        if (linkYoutube.trim() !== '')  {
            
            update.linkYoutube = linkYoutube;

        } else {

            return toast.error('link youtube  is required');
            
        }

        if (category.trim() !== '')  {
            
            update.category = category;

        } else {

            return toast.error('category is required');
            
        }

        if (technology.trim() !== '')  {
            
            update.technology = technology.split(',');

        } else {

            return toast.error('technology is required');
            
        }

        if (timeCompletProject.trim() !== '')  {
            
            update.timeCompletProject = timeCompletProject;

        } else {

            return toast.error('time Complet Project is required');
            
        }

        if (image) {
            formData.append('image', image);
            dispatch(updateProjectImage(formData, id));
        } else if (!image) {

            return toast.error('time Complet Project is required');
            
        } else {
            dispatch(updateProject(update, id));
        }

    }
    
    


    const navigate = useNavigate()

    useEffect(() => {
        if (isProjectCreated) {
            navigate(`/works/details/${id}`);
        }
        window.scrollTo(0, 0)
    }, [dispatch, id, isProjectCreated, navigate]);

    return ( 
        <>
        <ToastContainer theme="colored" position="top-center" />
        <div className="dashboard-container">
        <div className="dashboard-main-active">
            <div className="add-category">
                <h6 className="add-category-title">update project</h6>
                
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
                            <input id="category" value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" />
                            <label style={category ? styling : null} htmlFor="category" className="lable">what's your category?</label>
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
 
export default UpdateProject;