import * as actionTypes from '../actions/actionTypes';

const initialState = {
  pageArray: [],
  selectedPage: null,
  deletedPage: null,
  loading: false,
  error: false,
  success: false,
  message: null
}

const getPagesStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: false
  }
}

const getPagesSuccess = (state, action) => {
  return {
    ...state,
    pageArray: action.pages,
    loading: false,
    error: false,
    success: true,
    message: null,
    selectedPage: {title: 'dashboard'}
  }
}

const getPagesFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    success: false,
    error: true,
    message: action.errorMsg
  }
}

const getPageStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: false,
    message: null,
    success: false,
    selectedPage: null
  }
}

const getPageSuccess = (state, action) => {
  return {
    ...state,
    selectedPage: action.selectedPage,
    pageReset: false,
    loading: false,
    error: false,
    success: true,
    message: null,
  }
}

const getPageFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    success: false,
    error: true,
    message: action.errorMsg
  }
}

const addPageStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: false,
    success:false,
    message: null,
    selectedPage: action.selectedPage
  }
}

const addPageSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: false,
    success:true,
    message: action.message,
    selectedPage: action.newPage,
    pageArray: state.pageArray.concat(action.newPage)
  }
}

const addPageFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    success: false,
    error: true,
    message: action.errorMsg
  }
}

const editPageStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: false,
    success:false,
    message: null,
    selectedPage: action.selectedPage
  }
}

const editPageSubmit = (state, action) => {
  return {
    ...state,
    loading: true,
    error: false,
    success:false,
    message: null,
  }
}

const editPageSuccess = (state, action) => {
  return {
    ...state,
    selectedPage: action.updatedPage,
    loading: false,
    error: false,
    success: true,
    message: action.message,
  }
}

const editPageFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    error: true,
    success: false,
    message: action.message,
  }
}

const deletePageStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: false,
    success: false,
    message: null,
  }
}

const deletePageSuccess = (state, action) => {
  const updatedPageArray = state.pageArray.filter(page => page.id !== action.pageId);
  return {
    ...state,
    pageArray: updatedPageArray,
    loading: false,
    error: false,
    success: action.success,
    message: action.successMsg
  }
}

const deletePageFailed = (state, action) => {
  return {
    ...state,
    deletedPage: action.pageId,
    loading: false,
    error: true,
    success: false,
    message: action.errorMsg
  }
}

const reset = (state, action) => {
  return {
    ...state,
    loading: false,
    error: false,
    success: false,
    message: null
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_PAGES_START: return getPagesStart(state, action);
    case actionTypes.GET_PAGES_SUCCESS: return getPagesSuccess(state, action);
    case actionTypes.GET_PAGES_FAILED: return getPagesFailed(state, action);
    case actionTypes.DELETE_PAGE_START: return deletePageStart(state, action);
    case actionTypes.DELETE_PAGE_SUCCESS: return deletePageSuccess(state, action);
    case actionTypes.DELETE_PAGE_FAILED: return deletePageFailed(state, action);
    case actionTypes.GET_PAGE_START: return getPageStart(state, action);
    case actionTypes.GET_PAGE_SUCCESS: return getPageSuccess(state, action);
    case actionTypes.GET_PAGE_FAILED: return getPageFailed(state, action);
    case actionTypes.ADD_PAGE_START: return addPageStart(state, action);
    case actionTypes.ADD_PAGE_SUCCESS: return addPageSuccess(state, action);
    case actionTypes.ADD_PAGE_FAILED: return addPageFailed(state, action);
    case actionTypes.EDIT_PAGE_START: return editPageStart(state, action);
    case actionTypes.EDIT_PAGE_SUBMIT: return editPageSubmit(state, action);
    case actionTypes.EDIT_PAGE_SUCCESS: return editPageSuccess(state, action);
    case actionTypes.EDIT_PAGE_FAILED: return editPageFailed(state, action);
    case actionTypes.RESET: return reset(state, action);
    default:
      return state;
  }
}

export default reducer;
