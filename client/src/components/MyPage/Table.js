import React, { Component } from 'react';
import moment from 'moment';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import PopupDateForm from './PopupForm/PopupDateForm';
import PopupReadPageFrom from './PopupForm/PopupReadPageFrom';
import PopupEvaluation from './PopupForm/PopupEvaluation';
import PopupUploadImage from './PopupForm/PopupUploadImage';


class Table extends Component {

  renderList(){
    return this.props.books.map((book, i) => {
      if (book.status === "reading"){
        return (
            <tr key={i} style={{textAlign: "left"}}>
              <td><Link to={`/book_detail/${book._id}`}>{book.title}</Link></td>
              <td>{book.genre}</td>
              <td>{book.author}</td>
              <td>
                {
                  book.read_pages === null || book.page_nums === null
                  ? ''
                  : Math.round(book.read_pages / book.page_nums * 100) + '%'
                }
              </td>
              <td>{moment(book.startDate).format('YYYY-MM-DD')}</td>
              <td>{book.ScheduledEndDate ? moment(book.ScheduledEndDate).format('YYYY-MM-DD'): ''}</td>
              <td><StarRating evaluation={book.evaluation} /></td>
              <td>
                {/* <Button circular icon='book' color="olive"/> */}
                <PopupReadPageFrom circular icon='book' color="olive" book={book}/>
                <PopupEvaluation circular icon='star outline' color="yellow" book={book}/>
                <PopupDateForm icon={"calendar alternate outline"} color={"teal"} book={book}/>
                <PopupUploadImage book={book} />
              </td>
            </tr>
        )
      }
    })
  }
  render() {
    return (
          <table className="table">
          <thead>
            <tr style={{textAlign: "left"}}>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Author</th>
              <th scope="col">Progress</th>
              <th scope="col">Start Date</th>
              <th scope="col">Scheduled End Date</th>
              <th scope="col">Evaluation</th>
              <th scope="col">Read Pages/Evaluation/Finish Date</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
    );
  }
}

export default Table;
