import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PopupDateForm from './PopupForm/PopupDateForm';


class TableBefore extends Component {

  renderList(){
    return this.props.books.map((book, i) => {
      if (book.status === 0 && book.owner === this.props.user){
        return (
            <tr key={i} >
              <td><Link to={`/book_detail/${book._id}`}>{book.title}</Link></td>
              <td>{book.genre}</td>
              <td>{book.author}</td>
              <td>{book.page_nums}</td>
              <td>{moment(book.createdAt).format('YYYY-MM-DD')}</td>
              <td>{book.ScheduledStartDate ? moment(book.ScheduledStartDate).format('YYYY-MM-DD'): ''}</td>
              <td><PopupDateForm icon={"calendar alternate outline"} color={"teal"} book={book}/></td>
            </tr>
        )
      }
    })
  }
  render() {
    return (
          <table className="table" style={{textAlign: "center"}}>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Author</th>
              <th scope="col">Pages</th>
              <th scope="col">Registered Date</th>
              <th scope="col">Scheduled Start Date</th>
              <th scope="col">Start Date</th>
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
