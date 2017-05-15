import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Header from './header';

const App = () => (
  <div>
    <Header />
  </div>
);

ReactDom.render(<App />, document.getElementById('app'));
