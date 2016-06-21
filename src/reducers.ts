import { combineReducers } from 'redux';

import { Action, VisibilityFilter, isAddTodoAction, isToggleTodoAction, isSetVisibilityFilter } from './actions';

export interface Todo {
    text: string;
    completed: boolean;
}

export interface State {
    todos: Todo[];
    visibilityFilter: VisibilityFilter;
}

function todos(state: Todo[] = [], action: Action) {
    if (isAddTodoAction(action)) {
        return [
            ...state,
            {
                text: action.text,
                completed: false,
            },
        ];
    } else if (isToggleTodoAction(action)) {
        return state.map((todo, index) => {
            if (index === action.index) {
                return Object.assign({}, todo, {
                    completed: !todo.completed,
                });
            }
            return todo;
        });
    } else {
        action.visibilityFilter;
        return state;
    }
}

function visibilityFilter(state: VisibilityFilter = VisibilityFilter.SHOW_ALL, action: Action) {
    if (isSetVisibilityFilter(action)) {
        return action.visibilityFilter;
    }

    return state;
}

export default combineReducers({ todos, visibilityFilter });
