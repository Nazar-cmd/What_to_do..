import React, {Component} from "react";

export default class ItemAddForm extends Component {


    state = {
        text: ''
    };
    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text){
            this.props.onItemAdd(this.state.text)
            this.setState({
                text: ''
            });
        }
    };


    render() {
        return(
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type='text'
                       className="form-control"
                       placeholder="What needs to be done?"
                       onChange={this.onTextChange}
                       value={this.state.text} />
                <button type="button"
                        className="btn btn-outline-primary"
                        onClick={this.onSubmit}>Add Item</button>
            </form>
        )
    }


}