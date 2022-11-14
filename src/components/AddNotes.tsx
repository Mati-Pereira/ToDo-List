import { useState, KeyboardEvent, MouseEvent } from 'react'

interface AddNotesProps {
  onEnter: (taskname: string) => void
}

export function AddNotes ({ onEnter }: AddNotesProps) {
  const [inputText, setInputText] = useState('')

  const handleClick = () => {
    if (inputText) {
      onEnter(inputText)
      setInputText('')
    }
  }
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText)
      setInputText('')
    }
  }

  return (
    <div className="flex gap-2 my-10 items-stretch">

      <div className="bg-slate-900 px-4 rounded text-white flex items-center cursor-pointer active:scale-90 transition"
        onClick={handleClick}>
        +
      </div>

      <input type="text"
        placeholder="Add a note"
        className="w-full rounded px-2 py-2 bg-slate-700 text-gray-400"
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />

    </div>
  )
}
