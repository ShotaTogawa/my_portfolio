import React, { Component } from 'react';
import firebase from '../../firebase';
import md5 from 'md5';
import { Link } from 'react-router-dom';
import api from '../../api';
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
} from "semantic-ui-react";


class Signup extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        userId: "",
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

     handleSubmit = async () => {
        const { name, email, password } = this.state;
        if(this.isFormValid()){
            this.setState({errors:[], loading: true});
            await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(createdUser => {
                createdUser.user
                    .updateProfile({
                        displayName: name,
                        photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
                    })
            })
            .then(user => console.log(user))
            .catch(err => {
                console.error(err);
                this.setState({
                    errors: this.state.errors.concat(err),
                });
            })

            await api
            .post('/user', {
                name: name,
                email: email,
            })
            .then(response => console.log(response))
            .catch(err => console.error(err))
        }
    };


    render() {
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app" style={{marginTop: "30px"}} >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h1" icon color="violet" textAlign="center">
                <Icon name="puzzle piece" color="violet" />
                Register
              </Header>
              <Form onSubmit={this.handleSubmit} size="large">
                <Segment stacked>
                  <Form.Input
                    fluid
                    name="name"
                    icon="user"
                    iconPosition="left"
                    placeholder="User name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    type="text"
                  />
    
                  <Form.Input
                    fluid
                    name="email"
                    icon="mail"
                    iconPosition="left"
                    placeholder="Email Address"
                    onChange={this.handleChange}
                    value={this.state.email}
                    type="email"
                  />
    
                  <Form.Input
                    fluid
                    name="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    type="password"
                  />
    
                  <Form.Input
                    fluid
                    name="passwordConfirmation"
                    icon="repeat"
                    iconPosition="left"
                    placeholder="Password Confirmation"
                    onChange={this.handleChange}
                    value={this.state.passwordConfirmation}
                    type="password"
                  />
    
                  <Button
                    color="violet"
                    fluid
                    size="large"
                  >
                    Submit
                  </Button>
                </Segment>
              </Form>
              {this.state.errors.length > 0 && (
                <Message error>
                  <h3>Error</h3>
                  {this.displayErrors(this.state.errors)}
                </Message>
              )}
              <Message>
                Already a user? <Link to="/login">Login</Link>
              </Message>
            </Grid.Column>
          </Grid>
        );
    }
}

export default Signup;