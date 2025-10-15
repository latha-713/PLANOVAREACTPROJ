import Taskform from "./Components/Taskform"
import Tasklist from "./Components/TaskList"
import Progresstracker from "./Components/Progresstracker"

export default function App() {
  return(
    <div>
      <h1>PLANOVA</h1>
      <p>Our friendly TaskManager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}

 