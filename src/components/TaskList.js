// src/components/TaskList.js
import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, deleteTask, editTask, toggleCompletion }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompletion(task.id)}
          />
          <span>{task.name}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => {
            const newTaskName = prompt("Edit task name:", task.name);
            if (newTaskName) editTask(task.id, newTaskName);
          }}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
