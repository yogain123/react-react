import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(`Hii Yogendra ,, Dev Environment is ${process.env.NODE_ENV || "Default"}`);
    console.log(`Hii ${process.env.NAME}`);
    console.log(`Hii ${JSON.stringify(process.env)}`);
    console.log(`Hii I am from a release branch`);

    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
