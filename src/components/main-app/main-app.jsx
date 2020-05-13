import React,{Component} from "react";
import HeaderApp from "../header-app";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import UserDataService from "../service/user-data-service";
import TopPanel from "../top-panel";

import './main-app.css'

export default class MainApp extends Component{

    userDataService = new UserDataService();

    state={
        todoData:[],
        listData:[]
    };

    componentDidMount() {
        this.userDataService.getAllItems(this.props.user.uid,this.getTodoData);
    };

    getTodoData=(todoData)=>{
      this.setState({todoData})
    };

    viewAppData=(listData)=>{
        this.setState({listData})
    };

    createItem=(text)=>{
        this.userDataService.createItem(text, this.props.user.uid)
    };

    deleteItem=(id)=>{
        this.userDataService.deleteItem(id,this.props.user.uid)
    };

    onToggle=(property,id,prevValue)=>{
        this.userDataService.updateItem(property,id,prevValue,this.props.user.uid)
    };



    render() {



        const {listData,todoData} = this.state;

        const doneCount = todoData.filter((el)=>el.done).length;
        const todoCount = todoData.length - doneCount;

        return(
            <div className='main-app'>
                <HeaderApp toDo={todoCount}
                           done={doneCount}/>

                <TopPanel viewAppData={this.viewAppData} todoData={todoData}/>


                <TodoList
                    todoIt = {listData}
                    onDeleted={this.deleteItem}
                    onToggle={this.onToggle}/>


                <ItemAddForm
                    onItemAdd = {this.createItem} />
            </div>)
    }
}
