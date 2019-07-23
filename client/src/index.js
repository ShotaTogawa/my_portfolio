import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';
import './index.css';
import App from './App';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import BookForm from './components/forms/BookForm';

import "semantic-ui-css/semantic.min.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { setUser, clearUser } from './actions';
import rootReducer from './reducers';
import BookDetail from './components/Book/BookDetail';
import reduxThunk from 'redux-thunk'

const composeEnnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnnhancers(applyMiddleware(reduxThunk)));

class Root extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.props.setUser(user);
                console.log('setuser: ' + user);
                this.props.history.push('/');
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
                <Route path="/book" component={BookForm} />
                <Route path="/book_detail/:id" component={BookDetail} />
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

