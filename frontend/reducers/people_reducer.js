import { RECEIVE_ALL_PEOPLE,
         RECEIVE_PERSON } from '../actions/film_actions';
import merge from 'lodash/merge';

const PeopleReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_PEOPLE:
    case RECEIVE_PERSON:
    default:
      return oldState;
  }
};

export default PeopleReducer;
