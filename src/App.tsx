import { useEffect, useState } from 'react'
import { AddNotes } from './components/AddNotes'
import { List } from './components/List'
import type { Item } from './types/item'

const App = (): JSX.Element => {
  const [list, setList] = useState<Item[]>(() => {
    return JSON.parse(localStorage.getItem('todos')!)
  })

  const handleAddTask = (taskname: string): void => {
    const newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false
    })
    setList(newList)
  }

  const handleDeleteTask = (id: number): void => {
    const removeItem = list.filter((todo) => {
      return todo.id !== id
    })
    setList(removeItem)
  }

  // set in localStorage

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list))
  }, [list])

  return (
    <div className="max-w-4xl flex justify-center m-auto flex-col">
      <AddNotes onEnter={handleAddTask} />
      <h1 className="text-white text-4xl font-bold border-b-2 w-full flex justify-center py-5">Lista de Tarefas</h1>
      {list.map((item) => (
        <List key={item.id} item={item} onDelete={() => handleDeleteTask(item.id)} />
      ))}
    </div>
  )
}

export default App
