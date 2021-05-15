import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Store'


const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render()
store.subscribe(render)