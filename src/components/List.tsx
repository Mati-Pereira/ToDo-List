import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import type { Item } from '../types/item'

interface Props {
  item: Item
  onDelete: (event: React.MouseEvent<HTMLDivElement>) => void
}

const List = ({ item, onDelete }: Props): JSX.Element => {
  const [isChecked, setIsChecked] = useState(item.done)

  return (
    <div>
      <ul className="text-center py-3">
        <div className="flex flex-row mt-2 px-3 gap-3 items-center bg-slate-800 rounded-md justify-between">
          <div className="flex flex-row  gap-3 items-center bg-slate-800 ">
            <input
              type="checkbox"
              className="w-6 h-6 "
              checked={isChecked}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked)}
            />
            <li
              key={item.id}
              className={`py-2 text-white ${isChecked ? 'line-through' : 'initial'
                }`}
            >
              {item.name}
            </li>
          </div>
          <div onClick={onDelete}>
            <AiOutlineClose className="text-red-400 font-bold text-2xl cursor-pointer" />
          </div>
        </div>
      </ul>
    </div>
  )
}

export { List }
