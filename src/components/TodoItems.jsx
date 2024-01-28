import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const { todoitems } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {todoitems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        />
      ))}
    </div>
  );
};
export default TodoItems;
