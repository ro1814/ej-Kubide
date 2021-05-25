import { ADD_FAV_NOTE, REMOVE_FAV_NOTE } from '../actions/types'

export const favReducer = (state = {favNotes: [] }, action) => {
    switch( action.type ) {
        case ADD_FAV_NOTE:
            const note = action.payload

            const existNote = state.favNotes.find((x) => x.note === item.note)

            if (existNote) {
                return {
                    ...state, favNotes: state.favNotes.map((x) => x.note === existNote.note ? item : x)
                }
            } else {
                return {
                    ...state,
                    favNotes: [...state.favNotes, item]
                }
            }
            case REMOVE_FAV_NOTE:
                return{
                    ...state,
                    favNotes: state.favNotes.filter((x) => x.note !== action.payload)
                }
        default:
            return state
    }
} 