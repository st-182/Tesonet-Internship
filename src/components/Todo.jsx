import React, { useContext } from "react";
import { TodosContext } from "../App";

const Todo = ({ name, description, id, completed }) => {
  const context = useContext(TodosContext);
  const { todosState, todosDispatch } = context;

  const completionHandler = () => {
    const changeToComplete = todosState.todos.filter((todo) => todo.id === id);
    changeToComplete[0].completed = changeToComplete.completed ? false : true;

    console.log(todosState.todos);
    localStorage.setItem("todos", JSON.stringify([...todosState.todos]));
    todosDispatch({
      type: "Update Todos",
      payload: [...todosState.todos],
    });
    console.log(todosState);
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
      <p>{id}</p>
      <p>{name}</p>
      <p>{description}</p>
      <p>{completed ? "true" : "false"}</p>
      <div>
        <button onClick={completionHandler}>Complete</button>
        <button onClick={removalHandler}>Remove</button>
      </div>
    </div>
  );
};

export default Todo;
