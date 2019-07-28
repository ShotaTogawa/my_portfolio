import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from '../../actions';
import NavBar from '../Navbar/Navbar';
import Menu from '../MyPage/Menu';
import UserInfo from './UserInfo';

class Profile extends Component {
    render() {
        const user = this.props.user;
        return (
            <div>
                <NavBar />
                <div className="container-fluid" style={{ marginTop: "60px", marginBottom: "60px" }}>
                    <div className="row">
                        <div className="col-2">
                            <Menu />
                        </div>
                        <div className="col-10">
                            <UserInfo user={user} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Profile);