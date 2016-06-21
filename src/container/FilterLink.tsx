import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { VisibilityFilter, setVisibilityFilter } from '../actions.ts';
import { Action } from '../actions.ts';
import { State } from '../reducers.ts';

import Link from '../components/Link.tsx';

interface FilterLinkProps {
    visibilityFilter: VisibilityFilter;
}

function mapStateToProps(state: State, ownProps: FilterLinkProps ) {
    return {
        active: ownProps.visibilityFilter === state.visibilityFilter,
    };
}

function mapDispatchToProps(dispatch: (action: Action) => void, ownProps: FilterLinkProps) {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.visibilityFilter));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
