import React from "react";


const ItemList = (props) =>{
    const { userClick } = props;
    return(
                <ul className="navbar-nav">
                    {
                        React.Children.map(props.children,child =>{
                            return React.cloneElement(child, {userClick});
                        } )
                    }
                </ul>
    )
};





const ItemHeader = ({name, userClick=null})=>{
    return(
        <li  className="nav-item">
            <span className="nav-link" onClick={()=>userClick(name)}>{name}</span>
        </li>
    )
};


const LoggedInHeader = (props)=>{
    return(
        <ItemList {...props}>
            <ItemHeader name={'Logout'} />
            <ItemHeader name={'About'} />
        </ItemList>
    );
};

const StartHeader = (props)=>{
    return(
        <ItemList {...props}>
            <ItemHeader name={'Login'} />
            <ItemHeader name={'Register'} />
            <ItemHeader name={'About'} />
        </ItemList>
    );
};



export {StartHeader, LoggedInHeader};