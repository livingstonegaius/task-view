import './Task.css';

function Task({ task, onToggleComplete, onDelete }) {
  return (
    <div className={`task ${task.completed ? 'task-completed' : ''}`}>
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-description">{task.description}</p>

        <span className={`task-status ${task.completed ? 'completed' : 'active'}`}>
          {task.completed ? 'Completed' : 'Active'}
        </span>
      </div>

      <div className="task-actions">
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Mark Active' : 'Mark Completed'}
        </button>

        <button className="delete-button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;