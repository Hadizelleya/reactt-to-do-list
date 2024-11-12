function MyTasks({ todos, setTodos, toggleTodo }) {
  const handleDelete = (id) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };
  return (
    <>
      <div className="container">
        <ul className="list">
          {todos.length === 0 && (
            <h1>Your Task List Is Empty, Add Some New Tasks Please.</h1>
          )}
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="list-item">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={todo.completed}
                  id={todo.id}
                  onChange={(e) => {
                    toggleTodo(todo.id, e.target.checked);
                  }}
                />
                <label className="checked-text" htmlFor={todo.id}>
                  {todo.title}
                </label>
                <button
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                  className="btn"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default MyTasks;
