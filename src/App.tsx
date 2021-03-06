import * as React from 'react';
import './App.css';
import {Button} from 'antd';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <Button type="primary">Test</Button>
        </p>
      </div>
    );
  }
}

export default App;
