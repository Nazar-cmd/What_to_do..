import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import React from "react";

import './top-panel.css'

const TopPanel = ({onSearchChange, onFilterChange, filter}) =>{
    return(
        <div className="top-panel">
            <SearchPanel
                onSearchChange={onSearchChange}/>
            <ItemStatusFilter
                filter={filter}
                onFilterChange={onFilterChange}/>
        </div>
    )
};

export default TopPanel;