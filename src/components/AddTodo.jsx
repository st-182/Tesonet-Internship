import React, { useContext } from "react";
import { TodosContext } from "../App";

const AddTodo = () => {
  const context = useContext(TodosContext);
  const { todosState, todosDispatch } = context;
  const submitHandler = (e) => {
    e.preventDefault();
    const previousTasks = JSON.parse(localStorage.getItem("todos"));
    const task = {
      id: previousTasks ? previousTasks.length : 0,
      name: e.target[0].value,
      description: e.target[1].value,
      completed: false,
    };

    if (previousTasks) {
      localStorage.setItem("todos", JSON.stringify([...previousTasks, task]));
      todosDispatch({
        type: "Update Todos",
        payload: [...previousTasks, task],
      });
    } else {
      localStorage.setItem("todos", JSON.stringify([task]));
      todosDispatch({
        type: "Update Todos",
        payload: [task],
      });
    }
  };
  return (
    <section>
      <form onSubmit={submitHandler}>
        <label htmlFor="taskName">Task name</label>
        <input type="text" id="taskName" />
        <label htmlFor="taskDescription">Task description</label>
        <textarea id="taskDescription"></textarea>
        <input type="submit" value="Add task" />
      </form>
    </section>
  );
};

export default AddTodo;
