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
    history.push('/');
}


export const fetchBook = (id) => async dispatch => {
    const response = await api.get(`/book/${id}`);
    dispatch({type: actionTypes.FETCH_BOOK, payload: response.data});
}

export const fetchBooks = (id) => async dispatch => {
    const response = await api.get(`/books/${id}`);
    dispatch({type: actionTypes.FETCH_BOOKS, payload: response.data});
}

export const deleteBook = (id) => async dispatch => {
    await api.delete(`/book/${id}`);
    dispatch({type: actionTypes.DELETE_BOOK, payload: id});
    history.push('/');
}

export const updateReadPages = (id, formValue) => async dispatch => {
    const response = await api.patch(`/book/${id}/read_pages`, formValue);
    dispatch({type: actionTypes.UPDATE_READ_PAGES, payload: response.data});
    history.push('/');
}

export const updateEvaluation = (id, formValue) => async dispatch => {
    const response = await api.patch(`/book/${id}/evaluation`, formValue);
    dispatch({type: actionTypes.UPDATE_BOOK_EVALUATION, payload: response.data});
    history.push('/');
}

export const updateStartDate = (id, formValue) => async dispatch => {
    const response = await api.patch(`/book/${id}/startdate`, formValue);
    dispatch({type: actionTypes.UPDATE_BOOK_START_DATE, payload: response.data});
    history.push('/');
}

export const updateEndDate = (id, formValue) => async dispatch => {
    const response = await api.patch(`/book/${id}/enddate`, formValue);
    dispatch({type: actionTypes.UPDATE_BOOK_END_DATE, payload: response.data});
    history.push('/');
}

export const updateImage = (id, formValue) => async dispatch => {
    const response = await api.patch(`/book/upload/${id}`, formValue);
    dispatch({type: actionTypes.UPDATE_BOOK_IMAGE, payload: response.data});
    history.push('/');
}


/* User Book Memo */

export const fetchMemo = (id) => async dispatch => {
    const response = await api.get(`/book/${id}/memo`);
    dispatch({type: actionTypes.FETCH_BOOK_MEMOS, payload: response.data});
}

export const createMemo = (book_id, memo) => async dispatch => {
    const response = await api.post(`book/${book_id}/memo`, memo);
    dispatch({type: actionTypes.CREATE_MEMO, payload: response.data});
}

export const deleteMemo = (book_id, memo_id) => async dispatch => {
    await api.delete(`/book/${book_id}/${memo_id}`);
    dispatch({type: actionTypes.DELETE_BOOK_MEMO, payload: memo_id});
}
