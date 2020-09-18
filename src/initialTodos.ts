import { TodoItem } from "./interfaces/interfaces";

export const initialState: Array<TodoItem> =  [
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