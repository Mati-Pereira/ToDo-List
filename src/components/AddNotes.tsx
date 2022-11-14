import { KeyboardEvent, useState } from 'react'

interface AddNotesProps {
  onEnter: (taskname: string) => void
}

const AddNotes = ({ onEnter }: AddNotesProps): JSX.Element => {
  const [inputText, setInputText] = useState('')

  const handleClick = (): void => {
    if (inputText.length > 0) {
      onEnter(inputText)
      setInputText('')
    }
  }
  const handleKeyUp = (e: KeyboardEvent): void => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText)
      setInputText('')
    }
  }

  return (
    <div className="flex gap-2 my-10 items-stretch">
      <div
        className="bg-slate-900 px-4 rounded text-white flex items-center cursor-pointer active:scale-90 transition"
        onClick={handleClick}
      >
        +
      </div>

      <input
        type="text"
        placeholder="Adicione uma Nota"
        className="w-full rounded px-2 py-2 bg-slate-700 text-gray-100"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}

export { AddNotes }
