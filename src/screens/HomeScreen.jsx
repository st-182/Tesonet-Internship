import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";

import AddTodo from "../components/AddTodo";
import ShowTodos from "../components/ShowTodos";

const HomeScreen = () => {
  const context = useContext(TodosContext);
  const { todosState, todosDispatch } = context;

  useEffect(() => {}, []);

  return (
    <main>
      <h1>Home</h1>
      <AddTodo />
      <ShowTodos />
    </main>
  );
};

export default HomeScreen;
