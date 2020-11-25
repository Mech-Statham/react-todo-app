import React, {useState, createContext} from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {
    const [todos, setTodos] = useState([
        {
            title: "Todo Item 1 here",
            id: 1,
            completed: true
        },
        {
            title: "Todo Item 2 here",
            id: 2,
            completed: false
        }
    ]);

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
}
