import React, { Component } from 'react';
import BookInfo from './BookInfo';
import NavBar from '../Navbar/Navbar';
import Menu from '../MyPage/Menu';
import Memo from './Memo';
import MemoForm from './MemoForm';
import { fetchBook, fetchMemo } from '../../actions';
import { connect } from 'react-redux';

class BookDetail extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchBook(id);
        this.props.fetchMemo(id);
    }

    render() {
        const book = this.props.book;
        const memos = this.props.memos;
        return (
            <div>
            <NavBar />
            <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                    <div className="col-2">
                        <Menu />
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-4">
                                <BookInfo book={book}/>
                            </div>
                            <div className="col-8">
                                <h2>Memo</h2>
                                <Memo memos={memos} />
                                <MemoForm book={book}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        book: state.book[ownProps.match.params.id],
        memos: Object.values(state.memo)
    }
}

export default connect(mapStateToProps, { fetchBook, fetchMemo })(BookDetail);


