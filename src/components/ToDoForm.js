import { useDispatch } from "react-redux";
import { addTaskRedux } from "../redux.js/tasks";
import {SUBMIT} from "./styled/BUTTONS";
import FORM from "./styled/FORM";

function ToDoForm() {
  const dispatch = useDispatch();

  return (
    <FORM
      onSubmit={(e) => {
        e.preventDefault();
        const task = e.target.form.value;
        if (task.length === 0) {
          alert("there is no task");
        } else {
          dispatch(addTaskRedux(task));
          e.target.reset();
        }
      }}
    >
      <input
        placeholder="type your task"
        name="form"
        autoComplete="off"
      ></input>
      <SUBMIT>+</SUBMIT>
    </FORM>
  );
}

export default ToDoForm;
