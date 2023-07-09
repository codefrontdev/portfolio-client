import { toast } from "react-toastify";
import request from "../../utils/request";
import { projectActions } from "../slices/projectSlice";





// Create New Project 

export function createNewProject(newProject) {
    return async (dispatch, getState) => {
        try {
            dispatch(projectActions.setLoading());
                await request.post('/api/portfolio/v1/project', newProject, {
                    headers: {
                        Authorization: "Bearer " + getState().auth.userAdmin.message,
                        "Content-Type":"multipart/from-data"
                    }
                });
            

            dispatch(projectActions.setIsProjectCreated());
            setTimeout(() => dispatch(projectActions.clearIsProjectCreated(), 2000))
        } catch (error) {
            toast.error(error.response.data.message);
            dispatch(projectActions.clearLoading());
        }
    }
}









// get all Project 

export function getAllProject(pageNumber, category) {
    return async (dispatch, getState) => {
        try {
            let  data;
            if (pageNumber) {

                data = await request.get(`/api/portfolio/v1/project?pageNumber=${pageNumber}`);
            
            } else if (category) {

                data = await request.get(`/api/portfolio/v1/project?category=${category}`);
            
            } else if (category === '') {

                data = await request.get(`/api/portfolio/v1/project`);
            
            } else {
                
                data = await request.get(`/api/portfolio/v1/project`);
            
            }

            dispatch(projectActions.setProjects(data.data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}


// Get Count Project 

export function getCountProject() {
    return async (dispatch) => {
        try {
            const { data } = await request.get(`/api/portfolio/v1/project/count`);

            dispatch(projectActions.setProjectCount(data));
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
}





// get single Project 

export function getSingleProject(projectId) {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.get(`/api/portfolio/v1/project/${projectId}`);

            dispatch(projectActions.setProject(data));
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
}





// update Project image

export function updateProjectImage(images, projectId) {
    return async (dispatch, getState) => {
        try {

            console.log(images);
            dispatch(projectActions.setLoading());
            
            const { data } = await request.put(`/api/portfolio/v1/project/${projectId}`, images, {
                headers: {
                    Authorization: "Bearer " + getState().auth.userAdmin.message,
                    "Content-Type":"multipart/from-data"
                }
            });
            
            console.log(data);
            
            dispatch(projectActions.setProject(data));
            dispatch(projectActions.setIsProjectCreated());
            setTimeout(() => dispatch(projectActions.clearIsProjectCreated(), 2000))
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            dispatch(projectActions.clearLoading());
        }
    }
}





// update Project image

export function updateProject(newProject, projectId) {
    return async (dispatch, getState) => {
        try {

            console.log(newProject);
            dispatch(projectActions.setLoading());
            
            const { data } = await request.put(`/api/portfolio/v1/project/${projectId}`, newProject, {
                headers: {
                    Authorization: "Bearer " + getState().auth.userAdmin.message,
                }
            });
            
            console.log(data);
            
            dispatch(projectActions.setProject(data));
            dispatch(projectActions.setIsProjectCreated());
            setTimeout(() => dispatch(projectActions.clearIsProjectCreated(), 2000))
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            dispatch(projectActions.clearLoading());
        }
    }
}





// delete Project 

export function deleteProject(projectId) {
    return async (dispatch, getState) => {
        try {
            
            const { data } = await request.delete(`/api/portfolio/v1/project/${projectId}`, {
                headers: {
                    Authorization: "Bearer " + getState().auth.userAdmin.message,
                }
            });
            
            console.log(data);
            
            dispatch(projectActions.deleteProject(data.projectId));
            toast.success(data.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
}
