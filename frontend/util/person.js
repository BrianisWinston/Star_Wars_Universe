export const createPerson = person => (
  $.ajax({
    url: '/api/people',
    method: 'POST',
    data: { person }
  })
);

export const fetchPeople = () => (
  $.ajax({
    method: 'GET',
    url: 'api/people',
  })
);

export const fetchPerson = id => (
  $.ajax({
    method: 'GET',
    url: `api/people/${id}`
  })
);
