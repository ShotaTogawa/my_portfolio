import React from 'react';
import Menu from '../MyPage/Menu';
import BookRegister from './BookRegister';
import NavBar from '../Navbar/Navbar'

const BookForm = () => {
    return (
        <div>
        <NavBar />
        <div className="container" style={{ marginTop: "60px" }}>
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-10">
                    <BookRegister />
                </div>
            </div>
        </div>
        </div>
    )
}

export default BookForm
