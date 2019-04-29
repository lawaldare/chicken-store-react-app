import _ from 'lodash';
import { FETCH_CHICKENS, FETCH_CHICKEN } from '../actions';

const initialState = {
  chicken: {},
  allChicken: []
};
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CHICKEN:
      return {
        ...state,
        chicken: action.payload.data
      };

    case FETCH_CHICKENS:
      return {
        ...state,
        allChicken: action.payload.data
      };
    default:
      return state;
  }
};

// _.mapKeys(action.payload.data.recipes, 'recipe_id');
