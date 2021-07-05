import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusRedux,
  removeTaskRedux,
  rewriteTaskRedux,
  sortTasks,
  tasksSelector,
} from "../redux.js/tasks";
import { REMOVE, MOVE } from "./styled/BUTTONS";
import LIST from "./styled/LIST";

function ToDoList() {
  const dispatch = useDispatch();

  const [currentCard, setCurrentCard] = useState();

  const list = useSelector(tasksSelector);
  console.log(list);

  function dragStartHandler(e, t) {
    setCurrentCard(t);
  }

  function dragEndHandler(e) {
    e.target.style.background = 'rgba(255, 255, 255, 0.336)';
  }

  function dragOverhandler(e) {
    e.preventDefault();
    e.target.style.background = 'rgba(252,70,107,1)';
  }

  function dropHandler(e, t) {
    e.preventDefault();
    let tmp = list.tasks.map((l) => {
      if (l.task === t.task) {
        return { ...l, order: currentCard.order };
      }
      if (l.task === currentCard.task) {
        return { ...l, order: t.order };
      }
      return l;
    });
    dispatch(sortTasks(tmp));
    e.target.style.background = "rgba(255, 255, 255, 0.336)";
  }

  return (
    <LIST>
      {list.tasks.map((t, i) => {
        return (
          <li
            onDragStart={(e) => dragStartHandler(e, t)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverhandler(e)}
            onDrop={(e) => dropHandler(e, t)}
           
            key={i}
          >
            <input
              type="checkbox"
              checked={t.isDone}
              onChange={() => dispatch(changeStatusRedux(i))}
            />
            <textarea
              cols="45"
              rows={String(t.task.length / 40)}
              style={{ textDecoration: t.isDone ? "line-through" : "" }}
              value={t.task}
              onChange={(e) => {
                if (e.target.value.length === 0) {
                  dispatch(removeTaskRedux(i));
                } else {
                  dispatch(rewriteTaskRedux(i, e.target.value));
                }
              }}
            />
            <REMOVE
              onClick={() => {
                dispatch(removeTaskRedux(i));
              }}
            >
              X
            </REMOVE>
            <MOVE  draggable={true}>
              ...
            </MOVE>
          </li>
        );
      })}
    </LIST>
  );
}

export default ToDoList;
