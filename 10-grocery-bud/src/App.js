import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  return list ? JSON.parse(list) : []
}

function App() {

  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])


  const showAlert = (show = false, msg = '', type = '') => setAlert({ show, msg, type })

  const clearList = () => {
    showAlert(true, 'please enter value', 'danger')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger')
    setList(list.filter(item => item.id !== id))
  }

  const editItem = (id) => {
    //showAlert(true, 'item edited', 'success')
    const specificItem = list.find(item => item.id === id)
    setEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'please enter value', 'danger')

    } else if (name && isEditing) {
      setList(list.map(item => item.id === editID && { ...item, title: name } || item))
      setEditing(false)
      setEditID(null)
      setName('')
      showAlert(true, 'item edited', 'success')

    } else {

      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
      showAlert(true, 'item added to the list', 'success')

    }
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {
        list.length > 0 &&
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>clear items</button>
        </div>
      }
    </section>
  )
}

export default App
