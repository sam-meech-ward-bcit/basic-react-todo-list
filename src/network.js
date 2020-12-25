import axios from 'axios'

export async function getTasks() {
  const data = await axios.get('/api/tasks')
  return data.data
}

export async function postTask(task) {
  const data = await axios.post('/api/tasks', task)
  return data.data
}

export async function updateTask(id, taskData) {
  const data = await axios.patch(`/api/tasks/${id}`, taskData)
  return data.data
}

export async function deleteTask(id) {
  const data = await axios.delete(`/api/tasks/${id}`)
  return data.data
}