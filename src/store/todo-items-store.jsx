import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoitems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoitemsReducer = (currentTodoitems, action) => {
  let newTodoItems = currentTodoitems;
  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...currentTodoitems,
      {
        name: action.payload.todoName,
        dueDate: action.payload.todoDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoitems.filter(
      (item) => item.name !== action.payload.todoName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoitems, dispatchTodoitems] = useReducer(todoitemsReducer, []);

  const addNewItem = (todoName, todoDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: { todoName, todoDate },
    };
    dispatchTodoitems(newItemAction);
  };

  const deleteItem = (todoitemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { todoName: todoitemName },
    };
    dispatchTodoitems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoitems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
