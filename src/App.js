import React, { Component } from 'react';
import HeaderComponent from './components/Header.component';
import IndexBodyComponent from './components/IndexBody.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderComponent />
          <IndexBodyComponent />
      </div>
    );
  }
}

export default App;
