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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} 
        onDelete={deleteTask}/>
    </div>
  );
}


export default App;
