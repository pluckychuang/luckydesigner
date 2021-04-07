import React from 'react';
import ReactDOM from 'react-dom';
import Home from './container/Home';
import './assets/style/index.scss';
import ReactSourceCode from './container/ReactSourceCode'

// ReactDOM.render(
//   <React.StrictMode>
//     <Home></Home>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <ReactSourceCode></ReactSourceCode>,
  document.getElementById('root')
);

