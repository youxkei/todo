import * as React from 'react';

interface TodoProps {
    onClick: () => void;
    completed: boolean,
    text: string,
}

export default ({ onClick, completed, text }: TodoProps) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none',
        }}
    >
        {text}
    </li>
);
