import React from 'react';  
import { Stack, Label } from '@fluentui/react';  
  
function TodoItem(props) {  
    return (  
        <Stack>  
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between">  
                <Label>{props.todo.name}</Label>  
            </Stack>  
        </Stack>  
    );  
}  
  
export default TodoItem