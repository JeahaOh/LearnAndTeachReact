import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// index.html의 #root를 찾아 react가 렌더링 한다.
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
