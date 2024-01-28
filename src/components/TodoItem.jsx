import React, { useContext } from "react";
// import { RiDeleteBin5Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";
// import { IoIosCloudDone } from "react-icons/io";
export default function TodoItem({ todoDate, todoName }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => deleteItem(todoName)}
        >
          {/* <IoIosCloudDone /> */}
          {/* <RiDeleteBin5Fill /> */}
          Delete
        </button>
      </div>
    </div>
  );
}
