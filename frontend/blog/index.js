import React from 'react';
import { Route } from 'react-router-dom';

import './style/normalize.css';
import './style/beautiful-jekyll.css';

import Header from './header';

const BlogApp = () => (
  <div>
    <Header />

    <Route path="/" component={null} />
  </div>
);

export default BlogApp;
