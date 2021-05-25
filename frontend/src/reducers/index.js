import { combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
import noteReducer from './noteReducer'; 
import { favReducer } from '../reducers/favNoteReducer'

export default combineReducers({
    form: formReducer,
    notes: noteReducer,
    fav: favReducer,
    
})

const favItemsFromStorage = localStorage.getItem('favItems') ? JSON.parse(localStorage.getItem('favItems')) : []

const initialState = {
    fav: { favItems: favItemsFromStorage }
}
const middleware = [thunk]



