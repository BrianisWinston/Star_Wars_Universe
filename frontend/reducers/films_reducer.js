import { RECEIVE_ALL_FILMS,
         RECEIVE_FILM } from '../actions/film_actions';
import merge from 'lodash/merge';

const FilmsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_FILMS:
      return merge({}, action.films)
    case RECEIVE_FILM:
      return merge({}, oldState, {[action.film.id]: action.film})
    default:
      return oldState;
  }
};

export default FilmsReducer;
