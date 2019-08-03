import React, { Component } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import MyPage from '../src/components/MyPage/MyPage'
import { connect } from 'react-redux';
import { fetchBooks } from './actions';

class App extends Component {

  componentWillMount() {
    const id = this.props.currentUser.uid;
    this.props.fetchBooks(id);
  }

  render() {
    const books = this.props.books;
    return (
      <div>
        <Navbar />
        <MyPage books={books} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  books: Object.values(state.book)
})

export default connect(mapStateToProps,{fetchBooks})(App);


