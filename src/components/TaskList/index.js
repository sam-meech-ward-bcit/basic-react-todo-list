import React from 'react'

import Task from '../Task'

export default function TaskList(props) {
  return (
    <ul className="task-list">
      {props.tasks.map(task => (
        <li key={task.id}>
          <Task task={task} toggleComplete={props.toggleComplete} delete={props.deleteTask}></Task>
        </li>
      ))}
    </ul>
  )
}