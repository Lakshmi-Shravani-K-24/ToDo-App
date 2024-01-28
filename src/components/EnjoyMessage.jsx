import { useContext } from "react";

import styles from "./EnjoyMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const EnjoyMessage = () => {
  const { todoitems } = useContext(TodoItemsContext);

  return (
    todoitems.length === 0 && (
      <p className={styles.enjoy}>Enjoy Your Day. All your tasks are done..</p>
    )
  );
};
export default EnjoyMessage;
