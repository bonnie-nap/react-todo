import React, {Component} from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    render() {
        return (
            <li className="ToDoItem-Text" onClick={this.props.deleteItem}>{this.props.todo}</li>
        );
    }
}

export default ToDoItem;
