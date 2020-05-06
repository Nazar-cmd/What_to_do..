import React, {Component} from "react";
import './search-panel.css'


export default class SearchPanel extends Component{

    state = {
        req: ''
    };

    searchPanelChange=(event)=>{
        const written =  event.target.value;
        this.setState({req: written });
        this.props.onSearchChange(written);
    };

    render() {
        return(
            <input type='text' onChange={this.searchPanelChange} className='search ' placeholder='Search'/>
        )
    }

}

