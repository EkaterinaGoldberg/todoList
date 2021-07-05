import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks = [
        ...state.tasks,
        { task: payload.task, isDone: false, order: state.tasks.length + 1 },
      ];
    },
    removeTask: (state, { payload }) => {
      state.tasks.splice(payload.index, 1);
      state.tasks.map((t,i) => {
        return t.order = i+1;
      })
    },
    changeStatus: (state, { payload }) => {
      state.tasks[payload.index].isDone = !state.tasks[payload.index].isDone;
    },
    rewriteTask: (state, { payload }) => {
      state.tasks[payload.index].task = payload.task;
    },
    setTasks: (state, { payload }) => {
      state.tasks = payload.list;
    },
  },
});

export default tasks.reducer;

export const {
  addTask,
  removeTask,
  changeStatus,
  rewriteTask,
  setTasks,
} = tasks.actions;

export const tasksSelector = (state) => state.tasks;

export function addTaskRedux(task) {
  return (dispatch) => {
    dispatch(addTask({ task: task }));
  };
}

export function changeStatusRedux(index) {
  return (dispatch) => {
    dispatch(changeStatus({ index: index }));
  };
}

export function removeTaskRedux(index) {
  return (dispatch) => {
    dispatch(removeTask({ index: index }));
  };
}

export function rewriteTaskRedux(index, task) {
  return (dispatch) => {
    dispatch(rewriteTask({ index: index, task: task }));
  };
}

export function sortTasks(tmp) {
  return (dispatch) => {
    tmp.sort((a, b) => {
      return a.order - b.order;
    });
    dispatch(setTasks({ list: tmp }));
  };
}
