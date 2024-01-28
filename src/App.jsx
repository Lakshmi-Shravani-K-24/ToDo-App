import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import EnjoyMessage from "./components/EnjoyMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <div className="outer-container">
      <TodoItemsContextProvider>
        <div className="todo-wrapper">
          <div className="todo-container">
            <AppName />
            <AddTodo />
            <EnjoyMessage />
            <TodoItems />
          </div>
        </div>
      </TodoItemsContextProvider>
    </div>
  );
}
export default App;
