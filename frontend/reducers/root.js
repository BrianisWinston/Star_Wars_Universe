import { combineReducers } from 'redux';
import PeopleReducer from './people_reducer';
import FilmsReducer from './films_reducer';

export default combineReducers({
  people: PeopleReducer,
  films: FilmsReducer
});
