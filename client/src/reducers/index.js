import { combineReducers } from 'redux';
import * as actionTypes from '../actions/type';
import _ from 'lodash';

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

const initialBook = {
    currentBook: null
};


const book_reducer = (state = initialBook, action) => {
    switch (action.type) {
        case actionTypes.CREATE_BOOK:
            return {...state, [action.payload.id]: action.payload};
        case actionTypes.FETCH_BOOK:
            return {...state, [action.payload.id]: action.payload};
        case actionTypes.FETCH_BOOKS:
            return {...state, ..._.mapKeys(action.payload, '_id')};
        case actionTypes.UPDATE_BOOK:
            return {...state, [action.payload.id]: action.payload};
        case actionTypes.DELETE_BOOK:
            return _.omit(state, action.payload);
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: user_reducer,
    book: book_reducer
});

export default rootReducer;