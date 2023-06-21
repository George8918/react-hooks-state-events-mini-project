import React from "react";
import Task from './Task'

function TaskList({task }) {
  return (
    <div className="tasks">
      {task.map((task) => (
        <Task key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
