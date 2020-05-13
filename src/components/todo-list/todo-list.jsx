import React, {useEffect,useRef} from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css'



const TodoList = ({todoIt, onDeleted, onToggle}) => {

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [todoIt.length]);


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


   // console.log(todoIt)
    return(

        <div className="item-list">
            <ul className='list-group'>
                {listItems}
                <div  ref={messagesEndRef}/>
            </ul>
        </div>
    )
};
export default TodoList;