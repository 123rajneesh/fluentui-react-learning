import React, { useState } from "react"
import './App.css';
import { Stack } from '@fluentui/react'
import { PrimaryButton, TextField } from "@fluentui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Todo Item 1" }, { id: 2, name: "Todo Item 2" }]);
  const addItem = (item) => {
    setTodos([...todos, { id: 3, "name": item }]);
  }

  return (

    <Stack>
      <Stack horizontalAlign="center">
        <h1>Todo App using Fluent UI & React</h1>
        <AddTodo addItem={addItem} />
        <TodoList todos={todos} />
      </Stack>
    </Stack>

  );
}

export default App;
