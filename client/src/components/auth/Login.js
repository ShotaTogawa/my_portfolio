import React, { Component } from 'react';

class Signup extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        password2: ""
    }

    render() {
        return (
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row align-items-center">
                    <div className="col-sm"></div>
                    <div className="col-sm align-self-center">
                    <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Login</h1>
                    <form>
                        <div className="form-group">
                            <label for="email">email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter your email"
                            />
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter your password"
                            />
                            <small className="form-text text-muted"></small>
                        </div>
                    </form>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        );
    }
}

export default Signup;