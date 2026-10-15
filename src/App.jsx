import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

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

const addTask = (newTask) => {
  setTasks((currentTasks) => [...currentTasks, newTask]);
};


  return (
    <main className="app">
      <h1>Task View</h1>
      <p>Your tasks at a glance.</p>

      <TaskForm onAddTask={addTask} />
<section>
  <TaskList
    tasks={tasks}
    onToggleComplete={toggleComplete}
    onDelete={deleteTask}
  />
</section>

{tasks.length === 0 && <p>No tasks remaining.</p>}

    </main>
  );
}

export default App;