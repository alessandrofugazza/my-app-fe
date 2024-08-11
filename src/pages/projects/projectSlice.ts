import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IAProject } from "../../types/api/IAProject";

export interface ProjectState {
  data: null | IAProject;
}

const initialState: ProjectState = {
  data: null,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setSelectedProject: (state, action: PayloadAction<IAProject | null>) => {
      state.data = action.payload;
    },
    editTitle: (state, action: PayloadAction<string>) => {
      state.data!.title = action.payload;
    },
    editDescription: (state, action: PayloadAction<string>) => {
      state.data!.title = action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      state.data!.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.data!.todos.splice(action.payload, 1);
    },
  },
});

export const { setSelectedProject, editTitle, editDescription, addTodo, removeTodo } = projectSlice.actions;

export default projectSlice.reducer;

// i dont even know why i do the things i do
export const selectProject = (state: RootState) => state.project.data;
