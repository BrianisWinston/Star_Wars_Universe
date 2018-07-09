import * as PersonApiUtil from '../util/person';

export const RECEIVE_ALL_PEOPLE = "RECEIVE_ALL_PEOPLE";
export const RECEIVE_PERSON = "RECEIVE_PERSON";

export const fetchPeople = () => dispatch => (
  PersonApiUtil.fetchPerson().then(people => dispatch(receiveAllPeople(people)))
);

export const fetchPerson = id => dispatch => (
  PersonApiUtil.fetchPerson(id).then(person => dispatch(receivePerson(person)))
);

export const createPerson = person => dispatch => (
  PersonApiUtil.createPerson(person).then(person => dispatch(receivePerson(person)))
);

const receiveAllPeople = people => ({
  type: RECEIVE_ALL_PEOPLE,
  people
});

const receivePerson = person => ({
  type: RECEIVE_PERSON,
  person
});
