import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem';

class App extends Component {
    state = {
      todos: [],
      todo: ''
    };

    addItem = () => {
      if (this.state.todo.length === 0) {
        return;
      }

      this.setState(({ todos, todo }) => ({
        todos: [
          ...todos,
          {todo}
        ],
      }));
    };

    handleInput = e => {
      this.setState({todo: e.target.value});
    };

    deleteItem = key => e => {
      this.setState(({ todos }) => ({
        todos: todos.filter((toDo, index) => index !== key)
      }));
    };

    render() {
        return (
            <div className="App">
              <img className="Logo" src={Logo} alt="React logo"/>
              <h1 className="App-Header">React To Do</h1>
              <div className="App-Container">
                  <div>
                      <input type="text" placeholder="Task" value={this.state.todo} onChange={this.handleInput}/>
                      <span className="btn btn-primary" onClick={this.addItem}>Add</span>
                  </div>
                  <div>
                  <ul className="ToDo-List">
                      {this.state.todos.map((Item, key) =>
                        <ToDoItem
                          todo={Item.todo}
                          key={key}
                          deleteItem={this.deleteItem(key)}
                        />
                      )}
                    </ul>
                  </div>
              </div>
            </div>
        );
    }
}

export default App;
