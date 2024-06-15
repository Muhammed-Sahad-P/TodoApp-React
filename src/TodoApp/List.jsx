import React from "react";

const List = ({ task, index, removeTask }) => {
  return (
    <>
      <div className="listtask">
        {task.title}
        <button
          onClick={() => {
            removeTask(index);
          }}
          className="dltbtn"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default List;
