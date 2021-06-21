import React, { useState } from "react"
import './App.css';
import { Stack } from '@fluentui/react'
import { MessageBar, MessageBarType } from "@fluentui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
const [alert,setAlert]=useState(false);
  const addItem = (item) => {
    setAlert(false);
    if (!todos.some(e => e.name == item.name)) {
      setTodos([...todos, item]);
      return;
    }
    else {
      setAlert(true);
     
      console.log(`${item.name} already exists.`)
      console.log(alert)
    }

  }

  return (

    <Stack>
      <Stack horizontalAlign="center">
        <h1>Todo App using Fluent UI & React</h1>
        {alert ? (<MessageBar messageBarType={MessageBarType.blocked} >Task Already exists</MessageBar>) : ""}
        <AddTodo addItem={addItem} />
        <TodoList todos={todos} />
      </Stack>
    </Stack>

  );
}

export default App;
