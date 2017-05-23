import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import BlogApp from './blog';

const Root = () => <div>歡迎來到漢堡王！</div>;

const App = () => (
  <Switch>
    <Route exact path="/" component={Root} />
    <Route path="/blog" component={BlogApp} />
  </Switch>
);

ReactDom.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
