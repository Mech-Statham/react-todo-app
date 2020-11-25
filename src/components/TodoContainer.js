import React from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import {TodoProvider} from './TodoContext';

function TodoContainer() {
  return (
    <TodoProvider>
    <div className="todo-container">
        <TodoHeader />
        <TodoInput />
        <TodoList />
    </div>
    </TodoProvider>
  );
}

export default TodoContainer;