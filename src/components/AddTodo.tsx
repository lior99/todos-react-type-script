import React, { ReactEventHandler, useState } from 'react';
import { AddTodoProps } from '../interfaces/interfaces';

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo } ) => {
  const [value, setValue] = useState('');

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  
  const addTodo = () => {
    onAddTodo(value);
    setValue('');
  }

  return (
    <div className="add-todo">
      <input type="text" onChange={onTextChange} value={value} placeholder="enter todo" />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default AddTodo;
