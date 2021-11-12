import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"


function App() {
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
