import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../../types";
import { RootState } from "../../store";

interface Initialstate  {
    tasks: ITask[];
    filter: "All"|"Hight"|"Low"|"Medium";
}
const initialState:Initialstate = {
    tasks: [
        {
        id: "abcd",
        title: "",
        description: "",
        dueDate: "",
        isCompleted: false,
        priority: "High",
    },
],
filter: "All",
}
const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {},
});
export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}
export default taskSlice.reducer;