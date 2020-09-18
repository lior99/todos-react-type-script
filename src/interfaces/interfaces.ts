export interface TodoItem {
  id: number,
  description: string,
  completed: boolean
}


export interface AddTodoProps {
  onAddTodo(newValue: string): void
}

export interface OnChangeParams {
  completed: boolean,
  id: number
}

export interface ItemProps {
  item: TodoItem,
  onChange(params: OnChangeParams): void,
  key: string,
}