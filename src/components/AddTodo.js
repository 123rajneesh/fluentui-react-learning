import React, { useState } from "react"
import { Stack, Label, PrimaryButton, TextField } from "@fluentui/react"
import { exp } from "prelude-ls"

const AddTodo = (props) => {
    const [todo, setTodo] = useState();
    const add = () => {
        props.addItem(todo);
    }
    const setTodoItem = (e) => {
        setTodo(e.target.value);
        console.log(e.target.value);
    }
    return (
        <Stack>
            <Stack.Item>
                <TextField placeholder="add new task" onChange={setTodoItem} value={todo} />
            </Stack.Item>
            <PrimaryButton text="Add" onClick={add} />
        </Stack>
    )
}
export default AddTodo;