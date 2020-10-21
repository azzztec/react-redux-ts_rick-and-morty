// import '../css/main.scss'
// import React from 'react';
// import { render } from 'react-dom';
// import { createStore } from 'redux';

// import reducer from './reducers/index.js';
// import App from './components/App.js';

// const store = createStore(reducer);

// render(
//   <App store={store} />,
//   document.getElementById('root'),
// );

import '../css/main.scss'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
ReactDOM.render(
    <App userName="Beveloper" lang="TypeScript" />,
    document.getElementById("root")
);