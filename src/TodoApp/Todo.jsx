import React from "react";
import "./Todo.css";
import Addtask from "./Addtask";
import List from "./List";
const Todo = () => {
  return (
    <div className="Todocon">
      <div className="header">Todo</div>
      <div className="addtsk">
        <Addtask />
      </div>
      <div className="tasks">
        <List />
      </div>
    </div>
  );
};

export default Todo;
