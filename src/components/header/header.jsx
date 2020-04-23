import React from "react";
import './header.css'

const Header = ({toDo,done}) =>{

    return(
        <div>
            <h2>What's the matter?</h2>
            <div className='count'>
               Don't worry, there are {toDo} more to do, {done} done
            </div>
        </div>

    )
}

export default Header;
