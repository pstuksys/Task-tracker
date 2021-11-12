import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

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
//add task
const addTask =(task)=>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}
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
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length> 0 ? <Tasks tasks={tasks} 
        onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}


export default App;
