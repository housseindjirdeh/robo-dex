import {
  SET_SEARCH_TERM,
  GET_ROBOTS_IS_PENDING,
  GET_ROBOTS_WAS_SUCCESSFUL,
  GET_ROBOTS_HAD_ERROR
} from './constants';

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term
});

export const getRobots = () => {
  return (dispatch) => {
    dispatch({ type: GET_ROBOTS_IS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_ROBOTS_WAS_SUCCESSFUL,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_ROBOTS_HAD_ERROR,
          payload: error,
        })
      })
  };
};


//FUNCTION ACTIONS are intercepted by thunk, OBJECTS are NOT!!!
