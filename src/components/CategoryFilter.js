import React from "react";
import { useState } from "react";

function CategoryFilter({ categories, tasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
      {/* {selectedCategory} */}
    </div>
  );
}

export default CategoryFilter;
