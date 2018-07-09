import React from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../../actions/film_actions';
import Home from './home';

const mapStateToProps = (state) => ({
  photos: Object.values(state.films)
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => dispatch(fetchFilms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
