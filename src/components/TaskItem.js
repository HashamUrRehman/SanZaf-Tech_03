// src/components/TaskItem.js
import React, { useState } from 'react';
// src/components/TaskItem.js
import './TaskItem.css';


function TaskItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newTaskName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      ) : (
        <span>{task.name}</span>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default TaskItem;
