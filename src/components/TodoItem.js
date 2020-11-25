import React, {useContext, useState} from 'react';
import { TodoContext } from './TodoContext';

function TodoItem({title, id, completed}) {
  const [todos, setTodos] = useContext(TodoContext);

  const removeTodo = (id1) => {
    setTodos(prevTodos => [...prevTodos.filter((todo) => {
      return todo.id != id1;
    })]);
  }
  const completedChange = (e, id1) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id1) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <li className="todo-item">
      <input type="checkbox" checked={completed} onChange={(e) => completedChange(e, id)} />
      <button onClick={() => removeTodo(id)}>Delete</button>
      <span className={completed ? "todo-completed": ""}>{title}</span>
    </li>
  );
}

export default TodoItem;