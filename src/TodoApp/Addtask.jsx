import React, { useState } from "react";

const Addtask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    if (value.trim() !== "") {
      addTask(value);
      setValue("");
    } else {
      alert("Please enter a task!");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addItem} className="Addbtn">
        ADD
      </button>
    </div>
  );
};

export default Addtask;
