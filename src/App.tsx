import { useEffect, useState } from 'react'
import { AddNotes } from './components/AddNotes'
import { List } from './components/List'
import type { Item } from './types/item'

const App = (): JSX.Element => {
  const [list, setList] = useState<Item[]>(
    JSON.parse(localStorage.getItem('todos')!)
  )

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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list))
  }, [list])

  return (
    <div className="max-w-4xl flex justify-center mx-auto flex-col">
      <div className='mx-5 md:mx-0'>
        <AddNotes onEnter={handleAddTask} />
        <h1 className="text-white text-4xl font-bold border-b-2 w-full flex justify-center py-5 mb-5">
          Lista de Tarefas
        </h1>
        {list?.map((item) => (
          <List
            key={item.id}
            item={item}
            onDelete={() => handleDeleteTask(item.id)}
          />
        ))}
        {(list?.length < 1 ?? []) ? <h1 className="flex justify-center w-1/2 mx-auto items-center text-5xl text-white h-[70vh] text-center leading-loose">Nenhuma Tarefa no momento :)</h1> : null}
      </div>
    </div>
  )
}

export default App
