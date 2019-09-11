import React, { Component } from 'react';
import moment from 'moment';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import ImageModal from './PopupForm/ImageModal';
import { Button } from 'semantic-ui-react';


class TableDone extends Component {

  state = {
    modal: false
  }

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });


  renderList(){
    return this.props.books.filter((book) => book.status === "read" && book.owner === this.props.user)
      .map((book, i) =>{
        return(
          <tr key={i}>
            <td><Link to={`/book_detail/${book._id}`}>{book.title}</Link></td>
            <td>{book.genre}</td>
            <td>{book.author}</td>
            <td>{book.endDate ? moment(book.endDate).format('YYYY-MM-DD'): ''}</td>
            <td><StarRating evaluation={book.evaluation} /></td>
            <td>
              <Button
                  circular
                  icon='file image'
                  color={'orange'}
                  size={'mini'}
                  onClick={this.openModal}
                />
                <ImageModal
                  icon={"calendar alternate outline"}
                  closeModal={this.closeModal}
                  color={"teal"}
                  book={book}
                  modal={this.state.modal}
                />
              </td>
          </tr>
        )
      })
  }

  render() {
    return (
          <table className="table" style={{textAlign: "left"}}>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Author</th>
              <th scope="col">Finish Date</th>
              <th scope="col">Evaluation</th>
              <th scope="col">Image upload</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
    );
  }
}

export default TableDone;
