import * as FilmApiUtil from '../util/film';

export const RECEIVE_ALL_FILMS = "RECEIVE_ALL_FILMS";
export const RECEIVE_FILM = "RECEIVE_FILM";

export const fetchFilms = () => dispatch => (
  FilmApiUtil.fetchFilms().then(films => dispatch(receiveAllFilms(films)))
);

export const fetchFilm = id => dispatch => (
  FilmApiUtil.fetchFilm(id).then(film => dispatch(receiveFilm(film)))
);

export const createFilm = film => dispatch => (
  FilmApiUtil.createFilm(film).then(film => dispatch(receiveFilm(film)))
);

const receiveAllFilms = films => ({
  type: RECEIVE_ALL_FILMS,
  films
});

const receiveFilm = film => ({
  type: RECEIVE_FILM,
  film
});
