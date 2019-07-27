import React, { Component } from 'react';
import Table from './Table';
import TableBefore from './TableBefore';
import TableDone from './TableDone';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions';


class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.currentUser.uid
        }
    }


    componentDidMount() {
        const id = this.props.currentUser.uid;
        console.log(id)
        this.props.fetchBooks(id);
    }

    render() {
        const books = this.props.books;
        const user = this.props.currentUser.uid;
        return (
            <div>
                {/* <!-- タブボタン部分 --> */}
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                    <a href="#tab1" className="nav-link active" data-toggle="tab">Reading</a>
                    </li>
                    <li className="nav-item">
                    <a href="#tab2" className="nav-link" data-toggle="tab">Before Reading</a>
                    </li>
                    <li className="nav-item">
                    <a href="#tab3" className="nav-link" data-toggle="tab">Read</a>
                    </li>
                </ul>

                {/* <!--タブのコンテンツ部分--> */}
                <div className="tab-content">
                    <div id="tab1" className="tab-pane active">
                        <Table books={books} user={user} />
                    </div>
                    <div id="tab2" className="tab-pane">
                        <TableBefore books={books} user={user} />
                    </div>
                    <div id="tab3" className="tab-pane">
                        <TableDone books={books} user={user} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    books: Object.values(state.book)
  })

export default connect(mapStateToProps,{fetchBooks})(BookList);