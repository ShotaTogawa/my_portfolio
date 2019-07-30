import React from 'react';
import BookList from './BookList';
import Menu from './Menu';
import { connect } from 'react-redux';

const MyPage = ({currentUser}) => {
    return (
        <div className="container-fluid" style={{ marginTop: "60px" }}>
            <div className="row">
                <div className="col-2">
                    <Menu />
                </div>
                <div className="col-10">
                    <BookList
                        currentUser = {currentUser}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(MyPage);