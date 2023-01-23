import React from 'react'

export function TodoList({title, tasks}) {

    console.log('tasks', tasks)
    return (
      <div>
        <h3>{title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
          <ul>
            <li><input type='checkbox' checked={tasks[0].isDone}/><span>{tasks[0].title}</span></li>
            <li><input type='checkbox' checked={tasks[1].isDone}/><span>{tasks[1].title}</span></li>
            <li><input type='checkbox' checked={tasks[2].isDone}/><span>{tasks[2].title}</span></li>
    
          </ul>
          {/* <ul>
            {tasks.map((e, i) => {
                return <li key={e.id}><input type='checkbox' checked={e.isDone}/><span>{e.title}</span></li>
            })}
          </ul> */}
          <div>
            <button>All</button>
            <button>Activ</button>
            <button>Completed</button>
          </div>
      </div>
    )
  }