import React, {useState} from "react";

function NewTaskForm( {categories, onTaskFromSubmit}) {
  const [text, setText] = useState ("")
  const [category, setCategory] = useState("")

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      text,
      category,
    };
    onTaskFormSubmit(task);
    setText("");
    setCategory("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value ={category} onchange={handleCategoryChange}>
          {/* render <option> elements for each category here */}

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
