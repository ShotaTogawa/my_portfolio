import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

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
            <Grid textAlign="center" verticalAlign="middle" className="app" style={{marginTop: "30px"}}>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h1" icon color="violet" textAlign="center">
                        <Icon name="code branch" color="violet" />
                        Login
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
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
                        Don't have an account? <Link to="/signup">Singup</Link>
                    </Message>
                </Grid.Column>
      </Grid>
        );
    }
}

export default Signup;