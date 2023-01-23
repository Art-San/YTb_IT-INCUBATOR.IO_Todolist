import './App.css';
import { TodoList } from './TodoList'
import { useState } from 'react'

// export type FilterValueType = 'all' | 'completed' | 'active'

function App() {
const [tasks, setTask] = useState(
  [
    { id: 1, title: 'CSS', isDone: true},
    { id: 2, title: 'JS', isDone: true},
    { id: 3, title: 'React', isDone: false},
    { id: 4, title: 'Redux', isDone: false},
  ]
)

const [filter, setFilter] = useState('all')
function changeFilter(value) {
  setFilter(value)
}


let tasksForTodoList = tasks
if(filter === 'completed') {
  tasksForTodoList = tasks.filter((t => t.isDone === true))
}
if(filter === 'active') {
  tasksForTodoList = tasks.filter((t => t.isDone === false))
}
 
function removeTask (id) {
  const filteredTasks = tasks.filter((task) => task.id !== id)
  setTask(filteredTasks)
}


  return (
    <div className="App">
      <TodoList 
        title='What to learn'
        tasks={tasksForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
        />
    </div>
  )
}

export default App;
