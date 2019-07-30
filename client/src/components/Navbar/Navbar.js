import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log('logout'));
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={"/"} className="navbar-brand">Book Log</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <button className="btn btn-outline-success my-2 my-sm-0 fixed-right" onClick={this.handleSignOut}>Logout</button>
                </div>
            </nav>
        );
    }
}

export default Navbar;