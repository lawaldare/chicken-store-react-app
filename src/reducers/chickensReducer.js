import _ from 'lodash';
import {
  FETCH_CHICKENS,
  FETCH_CHICKEN,
  ADD_CHICKEN,
  UPDATE_CHICKEN
} from '../actions';

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

    case ADD_CHICKEN:
      return {
        ...state,
        chicken: action.payload.data
      };
    case FETCH_CHICKENS:
      return {
        ...state,
        allChicken: action.payload.data
      };
    case UPDATE_CHICKEN:
      return {
        ...state,
        allChicken: state.allChicken.map(chicken =>
          chicken.id === action.payload.id
            ? (chicken = action.payload)
            : chicken
        )
      };
    default:
      return state;
  }
};

// _.mapKeys(action.payload.data.recipes, 'recipe_id');
