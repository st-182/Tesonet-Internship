import React, { useContext } from "react";
import { TodosContext } from "../App";

const Todo = ({ name, description, id, completed }) => {
  const context = useContext(TodosContext);
  const { todosState, todosDispatch } = context;

  const completionHandler = () => {
    const changeToComplete = todosState.todos.map((item) => item);
    const changeToCompleteTodo = changeToComplete.filter(
      (todo) => todo.id === id
    );

    if (changeToCompleteTodo[0].completed === true) {
      changeToCompleteTodo[0].completed = false;
    } else {
      changeToCompleteTodo[0].completed = true;
    }

    console.log(changeToComplete);

    localStorage.setItem("todos", JSON.stringify([...changeToComplete]));
    todosDispatch({
      type: "Update Todos",
      payload: [...changeToComplete],
    });
  };
  const removalHandler = () => {
    const newTodos = todosState.todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify([...newTodos]));
    todosDispatch({
      type: "Update Todos",
      payload: [...newTodos],
    });
  };
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>Completed: {completed ? "true" : "false"}</p>
      <div>
        <button onClick={completionHandler}>Complete</button>
        <button onClick={removalHandler}>Remove</button>
      </div>
    </div>
  );
};

export default Todo;
