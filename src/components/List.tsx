import React from 'react';
import Item from './Item';
import { TodoItem } from '../interfaces/interfaces';

type ListProps = {
  todos: Array<TodoItem>,
  onItemChecked(item: TodoItem): void
}

const List: React.FC<ListProps> = (props: ListProps) => {
  const { todos, onItemChecked } = props;

  const onItemChange = (item: TodoItem) => {
    onItemChecked(item);
  }

  return (
    <div className="list-container">
      { todos.map(item => (
          <Item item={item} key={`key_${item.id}`} onChange={onItemChange} />
      ))}
    </div>
  )
}

export default List;