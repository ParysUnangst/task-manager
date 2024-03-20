import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(), // Unique ID based on the timestamp
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task Manager</h2>
      {/* Button to add a predefined task */}
      <button onClick={() => addTask('New Task')}>Add New Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? 'Completed' : 'Incomplete'}
            <button onClick={() => toggleTaskCompletion(task.id)}>Mark Task Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
