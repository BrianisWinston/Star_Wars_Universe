import { RECEIVE_ALL_PEOPLE,
         RECEIVE_PERSON } from '../actions/person_actions';
import merge from 'lodash/merge';

const PeopleReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_PEOPLE:
      return merge({}, action.people)
    case RECEIVE_PERSON:
      return merge({}, oldState, {[action.person.id]: action.person})
    default:
      return oldState;
  }
};

export default PeopleReducer;
