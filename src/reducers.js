import {
  SET_SEARCH_TERM,
  GET_ROBOTS_IS_PENDING,
  GET_ROBOTS_WAS_SUCCESSFUL,
  GET_ROBOTS_HAD_ERROR
} from './constants';

import { combineReducers } from 'redux';

const searchInitialState = {
  searchTerm: '',
}

const searchReducer = (state = searchInitialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return Object.assign({}, state, { searchTerm: action.payload });

    default:
      return state;
  }
};

const robotInitialState = {
  robots: [],
  isPending: false,
  error: '',
}

const robotReducer = (state = robotInitialState, action={}) => {
  switch (action.type) {
      case GET_ROBOTS_IS_PENDING:
        return Object.assign({}, state, {isPending: true});
      case GET_ROBOTS_WAS_SUCCESSFUL:
        return Object.assign({}, state, {robots: action.payload, isPending: false});
      case GET_ROBOTS_HAD_ERROR:
        return Object.assign({}, state, {error: action.payload, isPending: false});
      default:
        return state;
  }
}

export default combineReducers({
  search: searchReducer,
  robotData: robotReducer
});


// can do return {...state, searchTerm: action.payload} instead of object.assign. This is supported in react but is NOT yet in es6
