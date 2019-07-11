import React, { Component } from 'react';
import firebase from '../../firebase';
import md5 from 'md5';

class Signup extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
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
     * check form is not empty
     * @function
     * @param state
     * @return boolean
     */

     isFormEmpty = ({name, email, password, passwordConfirmation}) => {
        return(
        !name.length ||
        !email.length ||
        !password.length ||
        !passwordConfirmation.length
        );
     }

     /**
      * check password is valid or not
      * @function
      * @param state
      * @return boolean
      */

      isPasswordValid = ({password, passwordConfirmation}) => {
        if(password.length < 6 && passwordConfirmation.length < 6) {
            return false;
        } else if (password !== passwordConfirmation){
            return false;
        } else {
            return true;
        }
      }

    /**
     * check form is valid or not
     * @function
     * @return boolean
     */
    isFormValid = () => {
        let errors = [];
        let error;
        if (this.isFormEmpty(this.state)) {
            error = { message: "Please fill in all Fields"};
            this.setState({ errors: errors.concat(error) });
            return false;
        } else if (!this.isPasswordValid(this.state)) {
            error = { message: "Password is not valid"};
            this.setState({ errors: errors.concat(error)});
            return false;
        } else {
            return true;
        }
    }

    /**
     * if there are errors, print error messages
     * @function
     * @param errors
     */

     displayErrors = errors => errors.map((error, i) => <small key={i} className="form-text alert alert-danger" >{error.message}</small>)

     /**
      * submit user information to fireabase and Database
      * @function
      * @param event
      */

     handleSubmit = (event) => {
        event.preventDefault();
        if(this.isFormValid()){
            this.setState({errors:[], loading: true});
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                createdUser.user
                    .updateProfile({
                        displayName: this.state.username,
                        photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
                    })
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    errors: this.state.errors.concat(err),
                });
            })
        }
    };

    render() {
        console.log(this.state.errors)
        return (
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row align-items-center">
                    <div className="col-sm"></div>
                    <div className="col-sm align-self-center">
                    <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Signup</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter your name"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter your email"
                                onChange={this.handleChange}
                            />
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
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordConfirmation">Confirm your password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="passwordConfirmation"
                                placeholder="Enter your password"
                                onChange={this.handleChange}
                            />
                        </div>
                        {this.state.errors.length > 0 && (this.displayErrors(this.state.errors))}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        );
    }
}

export default Signup;