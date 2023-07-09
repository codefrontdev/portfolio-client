import { createSlice } from "@reduxjs/toolkit";





const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: [],
        projectCount: null,
        projectCate: [],
        loading: false,
        isProjectCreated: false,
        project: null,
    },
    reducers: {

        setProjects(state, action) {
            state.projects = action.payload;
        },
        setProjectCount(state, action) {
            state.projectCount = action.payload;
        },
        setProjectCate(state, action) {
            state.projectCate = action.payload;
        },
        setLoading(state) {
            state.loading = true;
        },
        clearLoading(state) {
            state.loading = false;
        },
        setIsProjectCreated(state) {
            state.isProjectCreated = true;
            state.loading = false;
        },
        clearIsProjectCreated(state) {
            state.isProjectCreated = false;
        },
        setProject(state, action) {
            state.project = action.payload;
        },
        deleteProject(state, action) {
            state.projects = state.projects.filter(p => p._id !== action.payload)
        }
    }
});


const projectReducer = projectSlice.reducer;
const projectActions = projectSlice.actions;

export {projectActions, projectReducer}