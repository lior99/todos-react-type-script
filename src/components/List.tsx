import React, { useState } from 'react';
import Item from './Item';

interface TodoItem {
  id: number,
  description: string,
  completed: boolean
}


const List = () => {
  const initialItems: Array<TodoItem> =  [
    {
      id: 1,
      description: 'do some stuff',
      completed: false,
    },
    {
      id: 2,
      description: 'second item',
      completed: false,
    },
  ];

  const [items, setItems] = useState(initialItems);

  return (
    <div>
      { items.map(item => (
          <Item {...item} key={item.id} />
      ))}
    </div>
  )
}

export default List;