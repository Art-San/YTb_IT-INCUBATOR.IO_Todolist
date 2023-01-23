import React from 'react'

import PropTypes from 'prop-types'
 
export function TodoList({title, tasks, removeTask, changeFilter }) {
 
  
    return (
      <div>
        <h3>{title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
          <ul>
              {
                  tasks.map((t) => {
                      return (
                      <li key={t.id}><input type='checkbox' checked={t.isDone}/>
                          <span>{t.title}</span>
                          <button onClick={() => removeTask(t.id)}>x</button>
                      </li>
                  )
                })
              }
          </ul>
          <div>
            <button onClick={() => changeFilter('all')}>All</button>
            <button onClick={() => changeFilter('completed')}>Activ</button>
            <button onClick={() => changeFilter('active')}>Completed</button>
          </div>
      </div>
    )
  }

TodoList.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
  delete1: PropTypes.func,
  changeFilter: PropTypes.func
}