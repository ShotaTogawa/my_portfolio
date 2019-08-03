import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PopupDateForm from './PopupForm/PopupDateForm';
import ImageModal from './PopupForm/ImageModal';
import { Button } from 'semantic-ui-react';


class TableBefore extends Component {

  state = {
    modal: false
  }

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  renderList(){
    return this.props.books.filter((book) => book.status === "beforeReading")
      .map((book, i) =>{
        return (
            <tr key={i} >
              <td><Link to={`/book_detail/${book._id}`}>{book.title}</Link></td>
              <td>{book.genre}</td>
              <td>{book.author}</td>
              <td>{book.page_nums}</td>
              <td>{moment(book.createdAt).format('YYYY-MM-DD')}</td>
              <td>
                <PopupDateForm icon={"calendar alternate outline"} color={"teal"} book={book}/>
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
              <th scope="col">Pages</th>
              <th scope="col">Registered Date</th>
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
