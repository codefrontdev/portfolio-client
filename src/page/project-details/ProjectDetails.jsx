import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteProject, getSingleProject } from "../../redux/apiCall/projectApiCall";
import Title from "../../components/title/Title";
import './project-details.css'
import swal from "sweetalert";

const ProjectDetails = () => {


    const { id } = useParams();
    const dispatch = useDispatch();
    const { project } = useSelector(state => state.project);
    const navigator = useNavigate();


    
    
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
                dispatch(deleteProject(project?._id))
                navigator('/works')
            } else {
                swal("Something Went Wrong!")
            }
        })
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getSingleProject(id));
    }, [dispatch, id]);
    return ( 
        <>
            <div className="project-details">
                <Title text={"Details"} title={'Details project'} span={"Details"} />
                <div className="project-details-item-data">
                    <div className="project-details-image-wrapper">
                        <iframe title={project?.title} allowFullScreen width={"550"} height={"300"} src={project?.linkYoutube.replace("watch?v=", "embed/").replace("youtube", "youtube-nocookie") + "?controls=0"}></iframe>
                    </div>
                    <div className="project-details-text-wrapper">

                        <h1 className="project-details-title">{
                            project?.title.length > 10 && project?.title.split(' ').join(" ") }</h1>
                        <p className="project-details-desc">
                            {project?.description}
                        </p>
                        <div className="project-details-technology">
                            Using: 
                            {project?.technology.map((technology, i) =>
                                <div key={i}>
                                    <span>{technology}</span>
                                </div>
                            )}
                        </div>
                        <div className="project-details-span">
                            <span className="project-details-timeCompletProject">
                                <small>The time taken to complete the project:</small>
                                {project?.timeCompletProject}
                            </span>
                            <span className="project-details-timeCompletProject">
                                {project?.createdAt === project?.updatedAt ? project?.createdAt : project?.updatedAt}
                            </span>
                        </div>
                        {
                            localStorage.getItem('token') && (
                            <div className="project-details-btn">
                                <Link to={`/works/details/${id}/update`}>
                                    <button>Edit
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                </Link>
                                <button onClick={deleteProjectHandler}>delet
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>

                            )
                        }
                        <div className="project-details-icon">
                            <Link to={project?.linkGithub} className="icon-see-code">
                                see source code
                                <i className="bi bi-github"></i>
                            </Link>
                            <Link to={project?.linkPreviou} className="icon-see-code">
                                Previou websit
                                <i className="bi bi-github"></i>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default ProjectDetails;