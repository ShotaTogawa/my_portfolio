import { combineReducers } from 'redux';
import * as actionTypes from '../actions/type';

const initialUser = {
    currentUser: null
};

const user_reducer = (state = initialUser, action) => {
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser
            };
        case actionTypes.CLEAR_USER:
            return {
                ...state
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    user: user_reducer
});

export default rootReducer;