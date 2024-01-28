import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = (props) => {
  const { headingName, icon, tasks, status, handleDelete } = props;
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} alt="" className="task_column_icon" />
        {headingName}
      </h2>
      {tasks.map(
        (taskItem, index) =>
          taskItem.status === status && (
            <TaskCard
              key={index}
              title={taskItem.task}
              tags={taskItem.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
