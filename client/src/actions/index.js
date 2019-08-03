import * as actionTypes from './type';
import api from '../api';
import history from '../history';


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

/* User Book */
export const createBook = (formValues) => async dispatch => {
    const response = await api.post('/book', formValues);
    dispatch({type: actionTypes.CREATE_BOOK, payload: response.data});
    history.push(`/book_detail/${response.data._id}/`);
}


export const fetchBook = (id) => async dispatch => {
    const response = await api.get(`/book/${id}`);
    dispatch({type: actionTypes.FETCH_BOOK, payload: response.data});
    history.push(`/book_detail/${id}`);
}

export const fetchBooks = (id) => async dispatch => {
    const response = await api.get(`/books/${id}`);
    dispatch({type: actionTypes.FETCH_BOOKS, payload: response.data});
    history.push('/');
}

export const deleteBook = (id) => async dispatch => {
    await api.delete(`/book/${id}`);
    dispatch({type: actionTypes.DELETE_BOOK, payload: id});
    history.push('/');
}

export const updateBook = (id, formValues) => async dispatch => {
    const response = api.patch(`/book/${id}`, formValues);
    dispatch({type: actionTypes.UPDATE_BOOK, payload: response.data});
    history.push('/');
}

/* User Book Memo */

export const fetchMemo = (id) => async dispatch => {
    const response = await api.get(`/book/${id}/memo`);
    dispatch({type: actionTypes.FETCH_BOOK_MEMOS, payload: response.data});
    history.push('/')
}

export const createMemo = (book_id) => async dispatch => {
    const response = await api.post(`book/${book_id}/memo`);
    dispatch({type: actionTypes.CREATE_MEMO, payload: response.data});
    history.push(`/book_detail/${book_id}/`);
}

export const deleteMemo = (book_id, memo_id) => async dispatch => {
    await api.delete(`/book/${book_id}/${memo_id}`);
    dispatch({type: actionTypes.DELETE_BOOK_MEMO, payload: memo_id});
    history.push(`/book_detail/${book_id}/`);
}
