import React, { useState } from "react";

function Task({ task }) {
  const { text, category } = task;

  const [isDeleted, setIsDeleted] = useState(false);

  function handleDelete() {
    setIsDeleted(true);
  }

  if (isDeleted) {
    return null;
  }


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
