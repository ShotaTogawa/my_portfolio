import React, { Component } from 'react';
import Table from './Table';
import TableBefore from './TableBefore';
import TableDone from './TableDone';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions';


class BookList extends Component {

    state = {
        status: this.props.books.status
    }

    componentDidMount() {
        this.props.fetchBooks();
      }

    render() {
        const books = this.props.books;
        return (
            <div>
                {/* <!-- タブボタン部分 --> */}
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                    <a href="#tab1" className="nav-link active" data-toggle="tab">読書中</a>
                    </li>
                    <li className="nav-item">
                    <a href="#tab2" className="nav-link" data-toggle="tab">開始前</a>
                    </li>
                    <li className="nav-item">
                    <a href="#tab3" className="nav-link" data-toggle="tab">読了</a>
                    </li>
                </ul>

                {/* <!--タブのコンテンツ部分--> */}
                <div className="tab-content">
                    <div id="tab1" className="tab-pane active">
                        <Table books={books}/>
                    </div>
                    <div id="tab2" className="tab-pane">
                        <TableBefore books={books}/>
                    </div>
                    <div id="tab3" className="tab-pane">
                        <TableDone books={books}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    books: Object.values(state.book)
  })

export default connect(mapStateToProps,{fetchBooks})(BookList);