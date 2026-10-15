import Task from './Task';
import './TaskList.css';

function TaskList({ tasks, onToggleComplete, onDelete, currentFilter }) {
  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === 'active') {
      return !task.completed;
    }

    if (currentFilter === 'completed') {
      return task.completed;
    }

    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>No tasks found for this filter.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;