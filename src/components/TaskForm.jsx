import React, {useState} from "react";

import "./TaskForm.css";
import Tag from "./Tag";
const TaskForm = () => {
  const [taskData, settaskData] = useState({
    task: "",
    status: "todo"
  })

  const handleChange = e => {
    const {name, value} = e.target

    settaskData(prev => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(taskData);
  }
  // const [task, settask] = useState("")
  // const [status, setstatus] = useState("todo")

  // const handleStatusChange = e => {
  //   setstatus(e.target.value)
  // }
  // const handleTaskChange = e => {
  //   settask(e.target.value)
  // }
  // console.log(task, status);
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
          name="task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML"/>
            <Tag tagName="CSS"/>
            <Tag tagName="JavaScript"/>
            <Tag tagName="React"/>
            
          </div>

          <div>
            <select name="status" id="" className="task_status" onChange={handleChange}>
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
