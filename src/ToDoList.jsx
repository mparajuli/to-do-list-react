import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Pray to coding gods",
    "Brew Java for Java",
    "Every sunrise commits",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  const handleRemove = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  const handleUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const handleDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <input
        type="text"
        value={newTask}
        placeholder="Enter a task..."
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
      <ol className="tasks-list">
        {tasks.map((task, index) => (
          <li className="task-list" key={index}>
            <span className="list-text">{task}</span>
            <button
              className="remove-button"
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
            <button className="up-button" onClick={() => handleUp(index)}>
              <FaArrowUp />
            </button>
            <button className="down-button" onClick={() => handleDown(index)}>
              <FaArrowDown />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
