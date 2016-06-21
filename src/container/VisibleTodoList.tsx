import { connect } from 'react-redux';

import { Action, Dispatch, VisibilityFilter, toggleTodo } from '../actions.ts';
import { State, Todo } from '../reducers.ts';

import TodoList from '../components/TodoList.tsx';


function getVisibleTodos(todos: Todo[], visibilityFilter: VisibilityFilter) {
    switch (visibilityFilter) {
        case VisibilityFilter.SHOW_ALL:
            return todos;
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
    }
};


type VisibleTodoListProps = {}

function mapStateToProps(state: State, ownProps: VisibleTodoListProps) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter).map((todo, index) => ({
            id: index,
            completed: todo.completed,
            text: todo.text,
        })),
    };
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: VisibleTodoListProps) {
    return {
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

