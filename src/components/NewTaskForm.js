import React from "react";
import { useState } from "react";

function NewTaskForm({ categories, setTasks }) {
  console.log(categories);
  const [allCategory, setAllCategory] = useState("All");
  const [inputText, setInputText] = useState([]);
  const [inputCategory, setInputCategory] = useState([]);
  const [inputSubmit, setInputSubmit] = useState([]);

  const categoryArray = categories.slice(1).join(" ");

  const mapCategory = categories.map((category, index) =>
    allCategory ? (
      <option key={index}>{category}</option>
    ) : (
      <option key={index}>{allCategory}</option>
    )
  );

  function handleText(event) {
    setTasks(event.target.value);
  }

  function handleCategory(event) {
    setTasks(event.target.value);
  }

  function handleSubmit(event) {
    setInputSubmit(event.target.value);
  }
  console.log(mapCategory);

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleText} />
        {inputText}
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {/* render <option> elements for each category here */}
          {mapCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
      {inputSubmit}
    </form>
  );
}

export default NewTaskForm;
