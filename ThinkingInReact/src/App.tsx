import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");
  ;

  function addTask() {
    if (input.trim() === "") return;
    setTasks([...tasks, input.trim()])
    setInput("")
  }

  function removeTask(index: number) {
    setTasks(tasks.filter((_,i) => i !== index));
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <div className="input-row">
        <input 
        type="text" 
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
         />
        <button onClick = {addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}
            <button className="delete-btn" onClick={() => removeTask(i)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
