import React, {useContext} from 'react';
import TodoItem from './TodoItem';
import {TodoContext} from './TodoContext';

function TodoList() {
  const [todos, setTodos] = useContext(TodoContext);

  return (
    <div className="todo-list">
      <ul>
      {todos.map(todo => (
        <TodoItem title={todo.title} id={todo.id} completed={todo.completed} key={todo.id} />
      ))}
      </ul>
    </div>
  );
}

export default TodoList;