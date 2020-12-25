import React from 'react'

export default function Task(props) {
  return (
    <div className="task-list__task">
      {props.task.id}. &nbsp;
      {props.task.name}
      <button onClick={() => props.toggleComplete(props.task)}>{props.task.completed ? "☑️" : "◻️"}</button>
      <button onClick={() => props.delete(props.task)}>🅇</button>
    </div>
  )
}