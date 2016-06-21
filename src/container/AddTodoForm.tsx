import * as React from 'react';
import { connect } from 'react-redux';

import { State } from '../reducers.ts'
import { Action, Dispatch, addTodo } from '../actions.ts';

interface AddTodoFormComponentProps {
    addTodo: (text: string) => void;
}


function mapStateToProps(state: State, ownProps: {}) {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: {}) {
    return {
        addTodo: (text: string) => {
            dispatch(addTodo(text));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(({ addTodo }: AddTodoFormComponentProps) => {
    let input: HTMLInputElement;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();

                    if (!input.value.trim()) {
                        return;
                    }

                    addTodo(input.value);
                    input.value = '';
                }}
            >
                <input ref={node => { input = node; }} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
});
