import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

class Signup extends Component {

    state = {
        email: "",
        password: "",
        errors: []
    }

    /**
     * set user input to state
     * @function
     * @param event
     */

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    /**
     * check form is valid
     * @function
     * @param state
     * @return boolean
     */

     isFormValid = ({email, password}) => email && password;

     /**
      * call firebase to login
      * @function
      * @param event
      */

    /**
     * if there are errors, print error messages
     * @function
     * @param errors
     */

     displayErrors = errors => errors.map((error, i) => <small key={i} className="form-text alert alert-danger" >{error.message}</small>)


     handleSubmit = (event) => {
        event.preventDefault();
        if(this.isFormValid(this.state)) {
            this.setState({errors: []});
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(signedInUser => {
                    console.log(signedInUser);
                })
                .catch(err => {
                    this.setState({
                        errors: this.state.errors.concat(err),
                        loading: false
                    });
                })
        }
    };

    render() {
        return (
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row align-items-center">
                    <div className="col-sm"></div>
                    <div className="col-sm align-self-center">
                    <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter your email"
                                onChange={this.handleChange}
                            />
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter your password"
                                onChange={this.handleChange}
                            />
                            <small className="form-text text-muted"></small>
                        </div>
                        {this.state.errors.length > 0 && (this.displayErrors(this.state.errors))}
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <small className="form-text text-muted" style={{marginTop: "10px"}}>If you don't have an account, please <Link to="/signup">sign up here</Link></small>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        );
    }
}

export default Signup;