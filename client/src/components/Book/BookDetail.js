import React, { Component } from 'react';
import BookInfo from './BookInfo';
import NavBar from '../Navbar/Navbar';
import Menu from '../MyPage/Menu';
import Memo from './Memo';
import MemoForm from './MemoForm';

class BookDetail extends Component {
    render() {
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
                                <BookInfo />
                            </div>
                            <div className="col-8">
                                <h2>Memo</h2>
                                <Memo />
                                <MemoForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default BookDetail;