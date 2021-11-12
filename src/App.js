import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import Task from "./components/Task";


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting',
        day: 'Feb 6th at 1pm',
        reminder: true,
    }, {
        id: 2,
        text: 'Learning',
        day: 'Feb 6th at 1pm',
        reminder: true,
    }, {
        id: 3,
        text: 'Finishing',
        day: 'Feb 6th at 1pm',
        reminder: true,
    }, {
        id: 4,
        text: 'Deconstructing',
        day: 'Feb 6th at 1pm',
        reminder: false,
    }
]);
//delete task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=>task.id !==id))
}
//togle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=> task.id ===id ?
   {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      {tasks.length> 0 ? <Tasks tasks={tasks} 
        onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}


export default App;
