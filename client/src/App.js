import React, { Component } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import firebase from './firebase';
import BookRegister from './components/forms/BookRegister';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BookRegister />
      </div>
    );
  }
}

export default App;