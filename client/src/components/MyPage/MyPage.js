import React, { Component } from 'react';
import BookList from './BookList';
import Menu from './Menu';

class MyPage extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                    <div className="col-2">
                        <Menu />
                    </div>
                    <div className="col-10">
                        <BookList />
                    </div>
                </div>
            </div>
        );
    }
}

export default MyPage;