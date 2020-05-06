import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'



const TodoList = ({todoIt, onDeleted, onToggle}) => {


    const listItems=todoIt.map((item)=>{
        const {id, ...itemProps} = item;

        return(
            <li key={id} className="list-group-item" >
                <TodoListItem {...itemProps}
                              onDeleted={()=>onDeleted(id)}
                              onToggleDone={()=>onToggle('done',id,item.done)}
                              onToggleImportant={()=>onToggle('important',id,item.important)}
                />
            </li>

        )
    });


    return(
        <ul className="list-group">
            {listItems}
        </ul>
    )
};
export default TodoList;