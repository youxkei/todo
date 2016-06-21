import * as React from 'react';

import AddTodoForm from '../container/AddTodoForm.tsx';
import VisibleTodoList from '../container/VisibleTodoList.tsx';
import Footer from './Footer.tsx';

export default () => (
    <div>
        <AddTodoForm />
        <VisibleTodoList />
        <Footer />
    </div>
);
