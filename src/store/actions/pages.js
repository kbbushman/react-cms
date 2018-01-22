import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getPagesSuccess = (pagesData) => {
  return {
    type: actionTypes.GET_PAGES_SUCCESS,
    pages: pagesData
  }
}

export const getPagesFailed = (message) => {
  return {
    type: actionTypes.GET_PAGES_FAILED,
    errorMsg: 'Sorry, we were unable to process your request at this time. ' + message
  }
}

export const getPagesStart = () => {
  return {
    type: actionTypes.GET_PAGES_START
  }
}

export const getPages = () => {
  return dispatch => {
    dispatch(getPagesStart());
    axios.get('https://reactcms-v1.firebaseio.com/pages.json')
      .then(response => {
        const pagesData = [];
        // console.log(response.data);
        for(let key in response.data) {
          pagesData.push({
            ...response.data[key],
            id: key
          });
        }
        dispatch(getPagesSuccess(pagesData));
        dispatch(reset());
      })
      .catch(err => {
        console.log(err);
        dispatch(getPagesFailed(err));
      });
  }
}

export const getPageSuccess = (pageData) => {
  // console.log(pageData);
  return {
    type: actionTypes.GET_PAGE_SUCCESS,
    selectedPage: pageData
  }
}

export const getPageFailed = (message) => {
  return {
    type: actionTypes.GET_PAGE_FAILED,
    errorMsg: 'Sorry, we were unable to process your request at this time. ' + message
  }
}

export const getPageStart = (title) => {
  return {
    type: actionTypes.GET_PAGE_START,
    selectedPage: title
  }
}

export const getPage = (title) => {
  return dispatch => {
    dispatch(getPageStart(title));
    axios.get(`https://reactcms-v1.firebaseio.com/pages.json?orderBy="url"&equalTo="${title}"`)
    .then(response => {
      let pageData = {};
      // console.log('Response', response);
      for(let key in response.data) {
        pageData = {
          ...response.data[key],
          id: key
        };
      }
      dispatch(getPageSuccess(pageData));
      dispatch(reset());
    })
    .catch(err => {
      console.log(err);
      dispatch(getPageFailed(err));
    });
  }
}

export const addPageStart = (newPage) => {
  return {
    type: actionTypes.ADD_PAGE_START,
    selectedPage: newPage
  }
}

export const addPageSuccess = (pageData) => {
  // console.log(pageData);
  return {
    type: actionTypes.ADD_PAGE_SUCCESS,
    newPage: pageData,
    message: 'Page added successfully!'
  }
}

export const addPageFailed = (message) => {
  return {
    type: actionTypes.ADD_PAGE_FAILED,
    errorMsg: 'Sorry, we were unable to process your request at this time. ' + message
  }
}

export const addPage = (newPage) => {
  return dispatch => {
    dispatch(addPageStart(newPage));
    axios.post('https://reactcms-v1.firebaseio.com/pages.json', newPage)
      .then(response => {
        // console.log(response);
        dispatch(addPageSuccess(newPage));
        setTimeout(() => {
          dispatch(reset());
        }, 2000);
      })
      .catch(err => {
        console.log(err);
        dispatch(addPageFailed(err));
      });
  }
}

export const editPageStart = (pageId) => {
  return {
    type: actionTypes.EDIT_PAGE_START,
    selectedPage: pageId
  }
}

export const editPageSuccess = (pageData) => {
  // console.log(pageTitle);
  return {
    type: actionTypes.EDIT_PAGE_SUCCESS,
    updatedPage: pageData,
    message: 'Page updated successfully!'
  }
}

export const editPageFailed = (message) => {
  return {
    type: actionTypes.EDIT_PAGE_FAILED,
    errorMsg: 'Sorry, we were unable to process your request at this time. ' + message
  }
}

export const editPageInit = (pageId) => {
  return dispatch => {
    axios.get(`https://reactcms-v1.firebaseio.com/pages/${pageId}.json/`)
      .then(response => {
        const pageData = response.data;
        dispatch(editPageStart(pageData));
      })
      .catch(err => {
        console.log(err);
        dispatch(editPageFailed(err));
      });
  }
}

export const editPageSubmit = () => {
  return {
    type: actionTypes.EDIT_PAGE_SUBMIT,
  }
}

export const updatePageSubmit = (pageId, updatedPage) => {
  return dispatch => {
    dispatch(editPageSubmit());
    axios.put(`https://reactcms-v1.firebaseio.com/pages/${pageId}.json`, updatedPage)
      .then(response => {
        console.log('UPDATED-PAGE: ', response);
        dispatch(editPageSuccess(response.data));
        setTimeout(() => {
          dispatch(reset());
        }, 2000);
      })
      .catch(err => {
        console.log(err);
        dispatch(editPageFailed(err));
      });
  }
}

export const deletePageSuccess = (id) => {
  return {
    type: actionTypes.DELETE_PAGE_SUCCESS,
    pageId: id,
    success: true,
    successMsg: 'Page deleted successfully!'
  }
}

export const deletePageFailed = (id, message) => {
  return {
    type: actionTypes.DELETE_PAGE_FAILED,
    pageId: id,
    errorMsg: 'Sorry, we were unable to process your delete request at this time:  ' + message
  }
}

export const deletePageStart = () => {
  return {
    type: actionTypes.DELETE_PAGE_START
  }
}

export const deletePage = (id) => {
  return dispatch => {
    dispatch(deletePageStart());
    const pageId = id;
    axios.delete(`https://reactcms-v1.firebaseio.com/pages/${pageId}.json`)
      .then(response => {
        dispatch(deletePageSuccess(id));
        setTimeout(() => {
          dispatch(reset());
        }, 2000);
      })
      .catch(err => {
        console.log(err.message);
        dispatch(deletePageFailed(id, err.message));
      });
  }
}

export const reset = () => {
  return {
    type: actionTypes.RESET
  }
}
