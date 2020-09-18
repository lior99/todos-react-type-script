import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List';
import { TodoItem } from './interfaces/interfaces';
import { initialState } from './initialTodos';

function App() {
  const [todos, setTodos] = useState(initialState);
 
  const onItemCheckedHandler = (item: TodoItem) => {
    const itemIndex = todos.findIndex(todoItem => todoItem.id === item.id);

    const newTodos = [
      ...todos.slice(0, itemIndex),
      {
        ...todos[itemIndex],
        completed: item.completed
      },
      ...todos.slice(itemIndex + 1),
    ]

    setTodos(newTodos);
  }

  const onAddNewTodo = (newTodoText: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        completed: false,
        description: newTodoText
      }
    ])
  }

  return (
    <div className="App">
      <AddTodo onAddTodo={onAddNewTodo}/>
      <List todos={todos} onItemChecked={onItemCheckedHandler} />
    </div>
  );
}

export default App;
