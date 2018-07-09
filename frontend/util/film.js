export const createFilm = film => (
  $.ajax({
    url: '/api/films',
    method: 'POST',
    data: { film }
  })
);

export const fetchFilms = () => (
  $.ajax({
    method: 'GET',
    url: 'api/films',
  })
);

export const fetchFilm = id => (
  $.ajax({
    method: 'GET',
    url: `api/films/${id}`
  })
);
