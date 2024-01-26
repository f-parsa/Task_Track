import React from "react";
import './TaskColumn.css'
import TaskCard from "./TaskCard";

const TaskColumn = (props) => {
    const { headingName, icon} = props
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} alt="" className="task_column_icon" />
        {headingName}
      </h2>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
