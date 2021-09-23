import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import Todo from "./Todo";

const ShowTodos = () => {
  const context = useContext(TodosContext);
  const { todosState, todosDispatch } = context;

  useEffect(() => {
    const previousTasks = JSON.parse(localStorage.getItem("todos"));
    todosDispatch({
      type: "Update Todos",
      payload: previousTasks,
    });
  }, []);
  return (
    <section>
      {todosState.todos ? (
        todosState.todos.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            description={todo.description}
            completed={todo.completed}
            id={todo.id}
          />
        ))
      ) : (
        <h2>No todos yet!</h2>
      )}
    </section>
  );
};

export default ShowTodos;
