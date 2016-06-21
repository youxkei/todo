const enum ActionType {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
}

export type Action = AddTodoAction | ToggleTodoAction | SetVisibilityFilterAction;
export type Dispatch = (action: Action) => void;


export interface AddTodoAction {
    type: ActionType;
    text: string;
}

export function addTodo(text: string): AddTodoAction {
    return { type: ActionType.ADD_TODO, text };
}

export function isAddTodoAction(action: Action): action is AddTodoAction {
    return action.type === ActionType.ADD_TODO;
}


export interface ToggleTodoAction {
    type: ActionType;
    index: number;
}

export function toggleTodo(index: number): ToggleTodoAction {
    return { type: ActionType.TOGGLE_TODO, index };
}

export function isToggleTodoAction(action: Action): action is ToggleTodoAction {
    return action.type === ActionType.TOGGLE_TODO;
}


export const enum VisibilityFilter {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE,
}

export interface SetVisibilityFilterAction {
    type: ActionType;
    visibilityFilter: VisibilityFilter;
}

export function setVisibilityFilter(visibilityFilter: VisibilityFilter): SetVisibilityFilterAction {
    return { type: ActionType.SET_VISIBILITY_FILTER, visibilityFilter };
}

export function isSetVisibilityFilter(action: Action): action is SetVisibilityFilterAction {
    return action.type === ActionType.SET_VISIBILITY_FILTER;
}
