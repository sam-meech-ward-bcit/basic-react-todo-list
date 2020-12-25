import React, { useState } from 'react'


export default function NewTask(props) {

  const [name, setName] = useState('')

  const submit = event => {
    event.preventDefault()
    props.onSubmit({name})
  }

  return (
    <form onSubmit={submit} className="add-task">
      <input type="text" onChange={e => setName(e.target.value)} value={name}></input>
      <button type="submit">Add Task</button>
    </form>
  )
}