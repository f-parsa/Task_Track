import React, {useState} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png"
import Done from './assets/check-mark-button.png'

const App = () => {

  const [tasks, settasks] = useState([])
  console.log("tasks", tasks);
  return (
    <div className='app'>
      <TaskForm setTask={settasks}/>
      <main className='app_main'>
        <TaskColumn headingName="To Do" icon={Todo}/>
        <TaskColumn headingName="Doing" icon={Doing}/>
        <TaskColumn headingName="Done" icon={Done}/>
        
      </main>
    </div>
  )
}

export default App