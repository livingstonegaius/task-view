import { useState } from 'react';
import Task from './components/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Learn React',
      description: 'Practice building reusable React components.',
      completed: false,
    },
    {
      id: 2,
      title: 'Set up Task View',
      description: 'Complete the initial project setup.',
      completed: true,
    },
  ]);

  const toggleComplete = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <main className="app">
      <h1>Task View</h1>
      <p>Your tasks at a glance.</p>

      <section>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
          />
        ))}
      </section>

      {tasks.length === 0 && <p>No tasks remaining.</p>}
    </main>
  );
}

export default App;