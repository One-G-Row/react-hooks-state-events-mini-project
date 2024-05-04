import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import Task from "./Task";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter tasks={tasks} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
