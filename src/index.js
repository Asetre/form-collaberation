import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//initialize firebase
import './fire'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
