import * as React from 'react';

import Todo from './Todo';


interface TodoListProps {
    todos: {id: number, completed: boolean, text: string}[];
    onTodoClick: (index: number) => void;
}

export default ({todos, onTodoClick}: TodoListProps) => (
    <ul>
        {todos.map(todo => (
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        ))}
    </ul>
);
