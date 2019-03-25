import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Prueba from './components/test.component';
import * as serviceWorker from './serviceWorker';
//import TestCheckBoxComponent from './components/TestCheckBox.component';
//import TestLifeCicle from './components/TestLifeCicle.component';
//import ConditionalRendering from './components/TestConditionalRendering.component';
//import TestFetchComponent from './components/TestFetch.component';
import TestFormComponent from './components/TestForm.component';

ReactDOM.render(<TestFormComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
