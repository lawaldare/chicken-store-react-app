import axios from 'axios';

export const FETCH_CHICKENS = 'fetch_chickens';
export const FETCH_CHICKEN = 'fetch-chicken';

const BASE_URL = 'http://localhost:4000/chickens/';

export const fetchChickens = () => {
  const request = axios.get(BASE_URL);

  console.log(request);

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
