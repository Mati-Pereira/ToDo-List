import type { Item } from "../types/item";
import { useState } from 'react';

type Props = {
  item: Item;
}

export function List({ item }: Props) {

  const [isChecked, setIsChecked] = useState(item.done)

  return (
    <div>
      <ul className="text-center py-3">
        <div className="flex flex-row mt-2 px-3 gap-3 items-center bg-slate-800 rounded-md">

          <input
            type="checkbox"
            className="w-6 h-6 "
            checked={isChecked}
            onChange={e => setIsChecked(e.target.checked)}
          />

          <li
            key={item.id}
            className={`py-2 text-white ${isChecked ? "line-through" : "initial"}`}>
            {item.name}
          </li>

        </div>
      </ul >
    </div >
  );
}
