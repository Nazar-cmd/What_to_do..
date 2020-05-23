import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import React,{Component} from "react";

import './top-panel.css'
import {UserDataService} from "../service";

export default class TopPanel extends Component{

    userDataService = new UserDataService();

    state={
        todoData: null,
        search:'',
        filter:'all',
    };

    filter (items,filter){
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=>!item.done);
            case 'done':
                return items.filter((item)=>item.done);
            default:
                return items;
        }
    };

    onFilterChange = (id) =>{
        this.setState({
            filter: id
        });
    };

    search(items, search){

        if (search.length===0){
            return items;
        }
        return items.filter((item)=>{
            return item
                .text
                .toLowerCase()
                .indexOf(search.toLowerCase()) > -1
        });
    };

    onSearchChange = (search) =>{
        this.setState({search})
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        const {search, filter, todoData} = this.state;
        const { viewAppData, } = this.props;

        if (this.state !== prevState){
            const visibleItems = this.filter(this.search(todoData, search),filter);
            viewAppData(visibleItems);
        }
    }

   // if (todoData !== prevProps.todoData || search !== prevState.search || filter !== prevState.filter)



    render() {
        const {filter}=this.state;
        return(
            <div className="top-panel">
                <SearchPanel
                    onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}/>
            </div>
        )
    }
};

