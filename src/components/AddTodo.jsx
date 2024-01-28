import React, { useRef } from "react";
// import { IoAddCircleSharp } from "react-icons/io5";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

export default function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef("");
  const todoDateElement = useRef("");

  const handleAddButtonClicked = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;

    addNewItem(todoName, todoDate);
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";
  };

  return (
    // <div className="container text-center">
    <form className="row kg-row" onSubmit={handleAddButtonClicked}>
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter Todo here"
        ></input>
      </div>
      <div className="col-4">
        <input type="date" ref={todoDateElement}></input>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success kg-button">
          {/* <IoAddCircleSharp /> */}
          Add
        </button>
      </div>
    </form>
    // </div>
  );
}
