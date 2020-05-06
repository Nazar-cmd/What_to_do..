import React,{Component} from "react";
import HeaderApp from "../header-app";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import {db} from "../FB/FBmore";
import UserDataService from "../service/user-data-service";
import TopPanel from "../top-panel";

import './main-app.css'

export default class MainApp extends Component{

    UserDataService = new UserDataService();

    state={
        todoData:[],
        search:'',
        filter:'all',
    };

    componentDidMount() {
        db.collection('users')
            .doc(this.props.user.uid)
            .collection('listItems')
            .onSnapshot(snapshot => {
                let todoData =[];
                snapshot.forEach(doc =>{
                    todoData.push(doc.data())});
                this.setState({todoData})
            });
    }

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
                .indexOf(search.toLowerCase())> -1
        });
    };

    onSearchChange = (search) =>{
        this.setState({search})
    };

    createItem=(text)=>{
        this.UserDataService.createItem(text, this.props.user.uid)
            .then(()=>{console.log('Success')})
    };

    deleteItem=(id)=>{
        this.UserDataService.deleteItem(id,this.props.user.uid)
    };

    onToggle=(property,id,prevValue)=>{
        this.UserDataService.updateItem(property,id,prevValue,this.props.user.uid)
    };


    render() {

        const {todoData, filter, search} = this.state;


        const doneCount = todoData.filter((el)=>el.done).length;
        const todoCount = todoData.length - doneCount;
        const visibleItems = this.filter(this.search(todoData, search),filter);

        return(
            <div className='main-app'>
                <HeaderApp toDo={todoCount}
                           done={doneCount}/>
                <TopPanel onSearchChange={this.onSearchChange}
                          onFilterChange={this.onFilterChange}
                          filter={filter}/>
                <TodoList
                    todoIt = {visibleItems}
                    onDeleted={this.deleteItem}
                    onToggle={this.onToggle}/>
                <ItemAddForm
                    onItemAdd = {this.createItem}/>
            </div>)
    }


}

/*

{todoCount, doneCount, filter, visibleItems, onSearchChange, onFilterChange, deleteItem, onToggle, addItem, uid}*/
