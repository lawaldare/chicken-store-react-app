import _ from 'lodash';
import { FETCH_CHICKENS, FETCH_CHICKEN } from '../actions';
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CHICKEN:
      return {
        ...state,
        [action.payload.data.recipe.recipe_id]: action.payload.data.recipe
      };

    case FETCH_CHICKENS:
      return _.mapKeys(action.payload.data.recipes, 'recipe_id');
    default:
      return state;
  }
};
