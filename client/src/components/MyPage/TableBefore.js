import React, { Component } from 'react';
import moment from 'moment';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';


class TableBefore extends Component {

  renderList(){
    return this.props.books.map((book, i) => {
      if (book.status === 1){
        return (
            <tr key={i}>
              <td>{i}</td>
              <td><Link to={`/book_detail/${book._id}`}>{book.title}</Link></td>
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
          <table className="table">
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

export default TableBefore;
