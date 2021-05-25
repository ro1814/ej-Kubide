import { ADD_FAV_NOTE, REMOVE_FAV_NOTE } from "../actions/types";

export const favReducer = (state = { favItems: [] }, action) => {
  switch (action.type) {
    case ADD_FAV_NOTE:
      const item = action.payload;

      const existItem = state.favItems.find((x) => x.recipe === item.note);

      if (existItem) {
        return {
          ...state,
          favItems: state.favItems.map((x) =>
            x.note === existItem.note ? item : x
          ),
        };
      } else {
        return {
          ...state,
          favItems: [...state.favItems, item],
        };
      }
    case REMOVE_FAV_NOTE:
      return {
        ...state,
        favItems: state.favItems.filter((x) => x.note !== action.payload),
      };
    default:
      return state;
  }
};
