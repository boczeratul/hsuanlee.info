import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return <div>歡迎來到漢堡王！</div>;
  }
}

ReactDom.render(<App />, document.getElementById('app'));
