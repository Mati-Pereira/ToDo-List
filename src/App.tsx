import { useState } from "react";
import type { Item } from "./types/item"

import { List } from "./components/List"
import { AddNotes } from "./components/AddNotes";

export default function App() {
  const [list, setList] = useState<Item[]>([])

  const handleTask = (taskname: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false,
    })
    setList(newList)
  }

  return (
    <div className="max-w-4xl flex justify-center m-auto flex-col">

      <AddNotes onEnter={handleTask} />

      <h1 className="text-white text-4xl font-bold border-b-2 w-full flex justify-center py-5">Lista de Tarefas</h1>
      {list.map((item, index) => (
        <List key={index} item={item} />
      ))}
    </div>
  );
}

