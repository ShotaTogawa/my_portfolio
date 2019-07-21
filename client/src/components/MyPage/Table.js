import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions';
import moment from 'moment';
import StarRating from './StarRating';


class Table extends Component {

  componentDidMount() {
    this.props.fetchBooks();
}

  renderList(){
    return this.props.books.map((book, i) => {
      if(book !== null) {
        return (
            <tr key={book._id}>
              <td>{i}</td>
              <td>{book.title}</td>
              <td>{book.genre}</td>
              <td>{book.author}</td>
              <td>{book.page_nums}</td>
              <td>{moment(book.createdAt).format('YYYY-MM-DD')}</td>
              <td>{book.ScheduledEndDate ? moment(book.ScheduledEndDate).format('YYYY-MM-DD'): ''}</td>
              <td><StarRating evaluation={book.evaluation} /></td>
            </tr>
        )
      }
    })
  }
  render() {
    return (
          <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Author</th>
              <th scope="col">Pages</th>
              <th scope="col">Registered Date</th>
              <th scope="col">Scheduled End Date</th>
              <th scope="col">Evaluation</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
    );
  }
}


const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  books: Object.values(state.book)
})

export default connect(mapStateToProps,{fetchBooks})(Table);