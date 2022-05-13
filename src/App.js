import Header from './components/Header'
import Tasks from './components/Tasks';
import {useState} from 'react';

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
    }
])
  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
