import axios from 'axios';

export const FETCH_CHICKENS = 'fetch_chickens';
export const FETCH_CHICKEN = 'fetch-chicken';
export const ADD_CHICKEN = 'add-chicken';

const BASE_URL = 'http://localhost:4000/chickens/';

export const fetchChickens = () => {
  const request = axios.get(BASE_URL);

  return {
    type: FETCH_CHICKENS,
    payload: request
  };
};

export const fetchChicken = id => {
  const request = axios.get(`${BASE_URL}/${id}`);
  return {
    type: FETCH_CHICKEN,
    payload: request
  };
};

export const addChicken = chickenData => dispatch => {
  fetch('http://localhost:4000/chickens/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(chickenData)
  })
    .then(res => res.json())
    .then(chicken =>
      dispatch({
        type: ADD_CHICKEN,
        payload: chicken
      })
    );
};
