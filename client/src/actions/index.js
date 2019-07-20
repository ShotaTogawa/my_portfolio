import * as actionTypes from './type';
import api from '../api';

/* User Auth */
export const setUser = user => {
    return {
        type: actionTypes.SET_USER,
        payload: {
            currentUser: user
        }
    };
};

export const clearUser = () => {
    return {
        type: actionTypes.CLEAR_USER
    };
};

// export const createBook = formValues = await (dispatch, user) => {
//     console.log(user);
//     const userId = user
//     dispatch({type: actionTypes.CREATE_BOOK, payload: Response.date});
// }