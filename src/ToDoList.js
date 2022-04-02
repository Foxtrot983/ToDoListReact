import React, { Component } from "react";
import ToDoItems from "./ToDoItems";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });
      this.setState({
        items: itemArray
      });
      this._inputElement.value = "";
    }

    console.log(itemArray);

    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="Введите задачу"
            ></input>
            <button type="submit">OK</button>
          </form>
        </div>
        <ToDoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default ToDoList;
