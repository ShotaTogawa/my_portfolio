import React from 'react';
import Menu from '../MyPage/Menu';
import RegisterBook from './RegisterBook';
import NavBar from '../Navbar/Navbar'

const BookForm = () => {
    return (
        <div>
        <NavBar />
        <div className="container-fluid" style={{ marginTop: "60px", marginBottom: "60px" }}>
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-10">
                    <RegisterBook />
                </div>
            </div>
        </div>
        </div>
    )
}

export default BookForm
