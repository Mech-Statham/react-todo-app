import React, {useState, useContext} from 'react';
import { TodoContext } from './TodoContext';

function TodoInput() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [id, setId] = useState(0);
  const [todos, setTodos] = useContext(TodoContext);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (1000 - 3 + 1) + 3);
  }

  const updateTitle = (e) => {
    setTitle(e.target.value);
  }

  const resetTodo = () => {
    setTitle('');
    setCompleted(false);
  }

  const addTodo = e => {
    e.preventDefault();
    setId(generateRandomNumber);
    setCompleted(false);
    setTodos(prevTodos => [...prevTodos, {title, id, completed}]);
    resetTodo();
  }

  return (
    <div className="todo-input">
        <form className="form-container" onSubmit={addTodo}>
            <input type="text" id="title" name="title" value={title} className="input-text" placeholder="Add todo.." onChange={updateTitle} />
            <button className="input-submit">Submit</button>
        </form>
    </div>
  );
}

export default TodoInput;