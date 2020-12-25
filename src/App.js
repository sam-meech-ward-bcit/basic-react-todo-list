import { useState, useEffect } from 'react'
import './App.css';

import * as network from './network'

import TaskList from './components/TaskList'
import NewTask from './components/NewTask';

function App() {

  const [tasks, setTasks] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getTasks()
  }, [])

  async function getTasks() {
    try {
      const data = await network.getTasks()
      setTasks(data.tasks)
      setError(null)
    } catch (error) {
      setError("Could not get tasks")
    }
  }  

  const newTask = async task => {
    try {
      const data = await network.postTask(task)
      console.log(data)
      setTasks([...tasks, data.task])
      setError(null)
    } catch (error) {
      setError("Could not create a new task")
    }
  }

  const toggleComplete = async task => {
    try {
      const data = await network.updateTask(task.id, {completed: !task.completed})
      const tasksCopy = tasks.map(t => t.id != data.task.id ? t : {...t, completed: !t.completed})
      setTasks(tasksCopy)
      setError(null)
    } catch (error) {
      setError("Could not complete task")
    }
  }

  const deleteTask = async task => {
    try {
      await network.deleteTask(task.id)
      const tasksCopy = tasks.filter(t => t.id !== task.id)
      setTasks(tasksCopy)
      setError(null)
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div className="App">
      {
        error ?
        <p>Error: {error}</p>
        :
        <>
        <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask}></TaskList>
        <NewTask onSubmit={newTask}></NewTask>
        </>
      }
      
    </div>
  );
}

export default App;
