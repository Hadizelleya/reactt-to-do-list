import { useState } from "react";

function MyForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <label className="title" htmlFor="input">
            Enter Task
          </label>
          <input
            required
            type="text"
            id="input"
            placeholder="Enter a Task"
            value={newItem}
            onChange={(e) => {
              setNewItem(e.target.value);
            }}
          />
          <input type="submit" className="submit" value={"Add Item"} />
        </form>
      </div>
    </>
  );
}

export default MyForm;
