import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskList({ tasks }) {
 /*  const [displayTask, setDisplayTask] = useState([]); */

    const mapTasks = tasks.map((task, index) => (
      <Task key={index} task={task}>
        {" "}
        {task}
      </Task>
    ));
  

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {mapTasks}
    </div>
  );
}

export default TaskList;
