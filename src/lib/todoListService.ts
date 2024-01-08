// src/lib/todoService.ts

import { writable } from 'svelte/store';

// Define the interface for a todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Define the interface for the todo service
interface TodoService {
  todos: Todo[];
  addTodo: (text: string) => Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// Initial todos array
const initialTodos: Todo[] = [];

// Create a writable store with initial value
export const todos = writable(initialTodos);

// Function to add a new todo
export const addTodo: TodoService['addTodo'] = (text) => {
  const newTodo: Todo = { id: Date.now(), text, completed: false };
  todos.update((existingTodos) => [newTodo, ...existingTodos]);
  return newTodo;
};

// Function to toggle the completed status of a todo
export const toggleTodo: TodoService['toggleTodo'] = (id) => {
  todos.update((existingTodos) =>
    existingTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

// Function to delete a todo
export const deleteTodo: TodoService['deleteTodo'] = (id) => {
  todos.update((existingTodos) => existingTodos.filter((todo) => todo.id !== id));
};