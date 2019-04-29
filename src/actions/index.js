import axios from 'axios';

//const API_KEY = 'be7ce8acf7340bc27c42465c0f66beca';
const API_KEY = 'd6625744b7aeb8a3113b9c33240bcaa4';
//const API_KEY = '48134f91bcb485a2374218b001c7d487';

export const FETCH_CHICKENS = 'fetch_chickens';
export const FETCH_CHICKEN = 'fetch-chicken';

export const fetchChickens = () => {
  const request = axios.get(
    `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken`
  );

  return {
    type: FETCH_CHICKENS,
    payload: request
  };
};

export const fetchChicken = id => {
  const request = axios.get(
    `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`
  );
  return {
    type: FETCH_CHICKEN,
    payload: request
  };
};
