import React from "react"
import { Stack } from "@fluentui/react"
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react/lib/DetailsList';

const TodoListFluentui = (props) => {
    const _columns = [
        { key: 'column1', name: 'Id', fieldName: 'id' },
        { key: 'column2', name: 'Name', fieldName: 'name' }
    ]
    return (
        <Stack>
            <DetailsList items={props.todos} column={_columns} />
        </Stack>

    )
}

export default TodoListFluentui