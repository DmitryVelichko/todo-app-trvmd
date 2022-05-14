import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Get 1000 USD',
      day: 'Feb 5th at 2:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Get 2000 USD',
      day: 'Feb 6th at 12:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Get 3000 USD',
      day: 'Feb 7th at 5:00',
      reminder: false,
    },
  ]);

  // Add Task
  

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

export default App;
