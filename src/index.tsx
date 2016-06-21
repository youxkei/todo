import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todoApp from './reducers.ts';
import App from './components/App.tsx';

render((<Provider store={createStore(todoApp)}><App /></Provider>), document.getElementById('root'));
