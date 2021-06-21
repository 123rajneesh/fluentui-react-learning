import React, { useState } from "react"
import { Stack, Label, PrimaryButton, TextField } from "@fluentui/react"
import uuid from "react-uuid";

const AddTodo = (props) => {

    const [todo, setTodo] = useState({});
    const add = () => {
        props.addItem(todo);
    }
    const setTodoItem = (e) => {
        setTodo({ id: uuid(), name: e.target.value });
    }
    return (
            <Stack>
                <Stack.Item>
                    <TextField placeholder="add new task" onChange={setTodoItem} value={todo.name} />
                </Stack.Item>
                <PrimaryButton text="Add" onClick={add} />
            </Stack>
    )
}
export default AddTodo;