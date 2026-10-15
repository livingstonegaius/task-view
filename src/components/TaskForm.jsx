import { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onAddTask({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add a New Task</h2>

      <label htmlFor="task-title">Task Title</label>
      <input
        id="task-title"
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <label htmlFor="task-description">Description</label>
      <textarea
        id="task-description"
        placeholder="Enter task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;