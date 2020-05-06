import React from "react";
import './header-app.css'







const HeaderApp = ({toDo,done}) =>{

    let todo_count = 'todo-count';
    let done_count = 'done-count';

    if (toDo){
        todo_count+=' active'
    }
    if (done){
        done_count+=' active'
    }

    return(
        <div>
            <h2>What's the matter?</h2>
            <div className='count'>
               Don't worry, there are
                <span className={todo_count}> {toDo}</span> more to do,
                <span className={done_count}> {done}</span> done
            </div>
        </div>

    )
};

export default HeaderApp;
