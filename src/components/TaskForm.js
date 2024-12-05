// src/components/TaskForm.js
import React, { useState } from 'react';
// src/components/TaskForm.js
import './TaskForm.css';


function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
