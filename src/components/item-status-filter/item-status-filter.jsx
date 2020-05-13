import React, {Component} from "react";
import './item-status-filter.css'


export default class ItemStatusFilter extends Component{


    buttons = [
        {name:"all", title:"ALL"},
        {name:"done", title:"DONE"},
        {name:"active", title:"ACTIVE"}
        ];

    render() {
        const {filter, onFilterChange} = this.props;
        const buttons=this.buttons.map(({name, title})=>{

            const ka = filter === name?'btn btn-info':'btn btn-outline-secondary';

            return(
                <button type='button'
                        key={name}
                        className={ka}
                        onClick={()=>onFilterChange(name)}>
                    {title}
                </button>
            )
        });




        return(
            <div className='item-status-filter btn-group'>
                {buttons}
            </div>
        )
    }
}
