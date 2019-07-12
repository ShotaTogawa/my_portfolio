import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';
import './index.css';
import App from './App';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setUser, clearUser } from './actions';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.props.setUser(user);
                this.props.history.push('/');
                console.log('login now');
            } else {
                this.props.history.push('/login');
                this.props.clearUser();
            }
        })
    }

    render () {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
        )
    }
}

const RootWithAuth = withRouter(
    connect(null, {setUser, clearUser})(Root)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

