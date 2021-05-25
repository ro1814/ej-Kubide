import notes from '../apis/notes';
import history from '../history';
import axios from 'axios'
import { 
    CREATE_NOTE,
    DELETE_NOTE,
    EDIT_NOTE,
    FETCH_NOTES,
    FETCH_NOTE,
    ADD_FAV_NOTE,
    REMOVE_FAV_NOTE
} from './types';

export const createNote = (formValues) => async(dispatch, getState) => {
    const response = await notes.post("/notes", formValues);
    dispatch({ type: CREATE_NOTE, payload: response.data });
    history.push('/');
}

export const fetchNotes = () => async(dispatch) => {
    const response = await notes.get('/notes');
    dispatch({ type: FETCH_NOTES, payload: response.data });
}

export const fetchNote = (id) => async(dispatch) => {
    const response = await notes.get(`/notes/${id}`);
    dispatch({ type: FETCH_NOTE, payload: response.data });
}

export const editNote = (id, formValues) => async(dispatch) => {
    const response = await notes.patch(`/notes/${id}`, formValues);
    dispatch({ type: EDIT_NOTE, payload: response.data });
    history.push('/');
}

export const deleteNote = (id) => async(dispatch) => {
    await notes.delete(`/notes/${id}`);
    dispatch({ type: DELETE_NOTE, payload: id });
    history.push('/');
}

export const addToFav = ( id ) => async ( dispatch, getState ) => {
    const { data } = await axios.get(`/notes/${id}`)

    dispatch({
        type: ADD_FAV_NOTE,
        payload: {
            note: data.id,
            title: data.title,
            description: data.description
        }
    })

    localStorage.setItem('favItems', JSON.stringify(getState().fav.favItems))
}

export const removeFromFav = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FAV_NOTE,
        payload: id
    })
    localStorage.setItem('favItems', JSON.stringify(getState().fav.favItems))
}