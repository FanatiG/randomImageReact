import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Image from './parentElement';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Image />, document.getElementById('root'));

serviceWorker.unregister();
