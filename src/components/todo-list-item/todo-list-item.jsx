import React from "react";
import './todo-list-item.css'


const TodoListItem=({text,important,done,onDeleted, onToggleImportant, onToggleDone})=>{




    let classNames='TodoListItem';

    if (done) {
        classNames+=' done';
    }

    if (important) {
        classNames+=' important';
    }

    return(
        <span className='TodoList'>
            <span onClick={onToggleDone} className={classNames}>
                {text}
            </span>
            <button type='button' className="btn btn-outline-danger btn-sm float-right m-1" onClick={onDeleted} >
                <i className='fa fa-trash-o'/>
            </button>
            <button type='button' className="btn btn-outline-success btn-sm float-right m-1" onClick={onToggleImportant}>
                <i className='fa fa-exclamation' />
            </button>
        </span>

    )
}

export default TodoListItem
