import { createSlice } from "@reduxjs/toolkit";
import { projectsConfig } from "./constants";

const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState: {
    projectsState: {
      projects: projectsConfig,
    },
    selectedProjectState: {
      selectedProject: projectsConfig[0],
    },
  },
  reducers: {
    addProject: (state, action) => {
      state.projectsState.projects = state.projectsState.projects.concat(
        ...action.payload
      );
    },
    editProjectConfig: (state, action) => {
      const project = state.selectedProjectState.selectedProject;
      const projects = Array.from(state.projectsState.projects);
      projects.forEach((element, idx) => {
        if (element?.id == project?.id) {
          projects[idx] = project;
        }
      });
      state.projectsState.projects = projects;
    },
    handleTodoChange: (state, action) => {
      state.selectedProjectState.selectedProject.tasks.todo = action.payload;
    },
    handleOnProgressChange: (state, action) => {
      state.selectedProjectState.selectedProject.tasks.onProgress =
        action.payload;
    },
    handleDoneChange: (state, action) => {
      state.selectedProjectState.selectedProject.tasks.done = action.payload;
    },
  },
});
export const {
  addProject,
  editProjectConfig,
  handleTodoChange,
  handleOnProgressChange,
  handleDoneChange,
} = projectsSlice.actions;
export default projectsSlice.reducer;
