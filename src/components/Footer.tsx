import * as React from 'react';

import { VisibilityFilter } from '../actions'
import FilterLink from '../container/FilterLink'

export default () => (
    <p>
        Show:
        {' '}
        <FilterLink visibilityFilter={VisibilityFilter.SHOW_ALL}>
            All
        </FilterLink>
        {', '}
        <FilterLink visibilityFilter={VisibilityFilter.SHOW_ACTIVE}>
            Active
        </FilterLink>
        {', '}
        <FilterLink visibilityFilter={VisibilityFilter.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </p>
);
