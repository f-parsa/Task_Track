import React, {useState, useEffect} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png"
import Done from './assets/check-mark-button.png'

const oldTasks = localStorage.getItem("tasks")

const App = () => {
  
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index != taskIndex)
    setTasks(newTasks)
  }
  return (
    <div className='app'>
      <TaskForm setTask={setTasks}/>
      <main className='app_main'>
        <TaskColumn headingName="To Do" icon={Todo} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn headingName="Doing" icon={Doing} tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn headingName="Done" icon={Done} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App