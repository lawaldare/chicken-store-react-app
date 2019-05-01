import axios from 'axios';

export const FETCH_CHICKENS = 'fetch_chickens';
export const FETCH_CHICKEN = 'fetch-chicken';
export const ADD_CHICKEN = 'add-chicken';
export const DELETE_CHICKEN = 'delete-chicken';
export const UPDATE_CHICKEN = 'update-chicken';

const BASE_URL = 'http://localhost:4000/chickens/';

export const fetchChickens = () => async dispatch => {
  const response = await axios.get(BASE_URL);
  dispatch({
    type: FETCH_CHICKENS,
    payload: response
  });
};

export const fetchChicken = id => {
  const response = axios.get(`${BASE_URL}/${id}`);
  return {
    type: FETCH_CHICKEN,
    payload: response
  };
};

export const deleteChicken = (id, callback) => async dispatch => {
  const response = await axios
    .delete(`${BASE_URL}/${id}`)
    .then(() => callback());
  dispatch({
    type: DELETE_CHICKEN,
    payload: id
  });
};

export const addChicken = chicken => async dispatch => {
  const response = await axios.post(BASE_URL, chicken);
  dispatch({
    type: ADD_CHICKEN,
    payload: response
  });
};

export const updateChicken = chicken => async dispatch => {
  const response = await axios.put(`${BASE_URL}/${chicken.id}`, chicken);
  dispatch({
    type: UPDATE_CHICKEN,
    payload: response
  });
};
