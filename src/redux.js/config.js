import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tasksReducer from './tasks';


const rootReducer = combineReducers({
    tasks: tasksReducer,
})

const store = configureStore({ reducer: rootReducer });

export default store;