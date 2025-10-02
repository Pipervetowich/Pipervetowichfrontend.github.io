import "./App.css";

export default function App() {
  const tasks = [
    "Finish homework",
    "Take out trash",
    "Walk the dog",
  ];

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <div className="input-row">
        <input type="text" placeholder="Enter a task" />
        <button>Add</button>
      </div>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}
            <button className="delete-btn">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
