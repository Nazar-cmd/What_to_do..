import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'



const TodoList = ({todoIt, onDeleted, onToggleDone, onToggleImportant}) => {


    const listItems=todoIt.map((item)=>{
        const {id, ...itemProps} = item;
        return(
            <li key={id} className="list-group-item" >
                <TodoListItem {...itemProps}
                              onDeleted={()=>onDeleted(id)}
                              onToggleDone={()=>onToggleDone(id)}
                              onToggleImportant={()=>onToggleImportant(id)}
                />
            </li>

        )
    });


    return(
        <ul className="list-group">
            {listItems}
        </ul>
    )
}
export default TodoList;