import React from 'react';
import { Route } from 'react-router-dom';

import './style/font.css';
import './style/normalize.css';
import './style/beautiful-jekyll.css';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const BlogApp = () => (
  <div>
    <Header />
    <Main />
    <Footer />

    <Route path="/" component={null} />
  </div>
);

export default BlogApp;
