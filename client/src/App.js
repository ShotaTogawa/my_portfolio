import React, { Component } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import MyPage from '../src/components/MyPage/MyPage'
import { connect } from 'react-redux';

class App extends Component {

    render() {
    return (
      <div>
        <Navbar />
        <MyPage />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);


