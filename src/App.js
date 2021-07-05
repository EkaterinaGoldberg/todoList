import CONTAINER from "./components/styled/CONTAINER";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <CONTAINER>
    <h1>ToDo List</h1>
      <ToDoForm />
      <ToDoList />
    </CONTAINER>
  );
}

export default App;
