import { useState } from 'react'
import './toDoApp.css'
export default function ToDo ({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false)

  function FormEdit () {
    const [newValue, setNewValue] = useState(item.title)

    function handleSubmit (e) {
      e.preventDefault()
    }

    function handleChange (e) {
      const value = e.target.value
      setNewValue(value)
    }

    function handleClickUpdate () {
      onUpdate(item.id, newValue)
      setIsEdit(false)
    }

    return (
      <form onSubmit={handleSubmit} className='toDoUpdateForm'>
        <input
          onChange={handleChange}
          type='text'
          className='toDoInput'
          value={newValue}
        />
        <button className='button' onClick={handleClickUpdate}>Update</button>
      </form>
    )
  }

  function ToDoElement () {
    return (
      <div className='toDoInfo'>
        <span className='toDoTitle'>{item.title}</span>
        <button onClick={() => setIsEdit(true)} className='button'>Edit</button>
        <button onClick={(e) => onDelete(item.id)} className='buttonDelete'>Delete</button>
      </div>
    )
  }

  return (
    <div className='toDo'>
      {isEdit ? <FormEdit /> : <ToDoElement />}
    </div>
  )
}
