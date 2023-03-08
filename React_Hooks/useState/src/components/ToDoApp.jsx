import { useState } from 'react'
import ToDo from './ToDo'
import './toDoApp.css'

export default function ToDoApp () {
  const [title, setTitle] = useState('')
  const [toDo, setToDo] = useState([])

  function handleChange (e) {
    const value = e.target.value
    setTitle(value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    const newToDo = {
      // eslint-disable-next-line no-undef
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const temp = [...toDo]
    temp.unshift(newToDo)
    setToDo(temp)
    // setToDo([...toDo, newToDo])
    setTitle('')
  }

  function handleUpdate (id, value) {
    const temp = [...toDo]
    const item = temp.find((item) => item.id === id)
    item.title = value
    setToDo(temp)
  }

  function handleDelete (id) {
    const temp = toDo.filter((item) => item.id !== id)
    setToDo(temp)
  }

  return (
    <div className='toDoContainer'>
      <form onSubmit={handleSubmit} className='toDoCreateForm'>
        <input onChange={handleChange} className='toDoInput' value={title} />
        <input
          onClick={handleSubmit}
          type='submit'
          value='Create to Do'
          className='buttonCreate'
        />
      </form>
      <div className='toDosContainer'>
        {toDo.map((item) => (
          <ToDo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}
