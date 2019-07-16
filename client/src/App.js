import React, { Component } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import firebase from './firebase';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;