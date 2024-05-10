
import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, setTasks, selectedCategory }) {
  const tasksChosen = selectedCategory !== 'All' ? tasks.filter(task => task.category === selectedCategory) : tasks;

  const onDelete = taskToDel => {
    const updatedTasks = tasks.filter(task => task.id !== taskToDel.id);
    setTasks(updatedTasks);
  };

  return (
    <div className="tasks">
      {tasksChosen.map(task => (
        <Task onDelete={() => onDelete(task)} task={task} text={task.text} category={task.category} key={uuid()} />
      ))}
    </div>
  );
}

export default TaskList;
