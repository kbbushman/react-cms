import * as actionTypes from './actions';

const initialState = {
  pages: null,
  page: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_PAGES:
      return {

      };
    case actionTypes.GET_PAGE:
      return {

      };
    case actionTypes.UPDATE_PAGE:
      return {

      };
    default:
      return state;
  }
}

export default reducer;
