import { ADD_USECASE, ADD_USECASES } from './UseCaseActions';

// Initial State
const initialState = { data: [] };

const UseCaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USECASE :
      return {
        data: [action.usecase, ...state.data]
      };

    case ADD_USECASES :
      return {
        data: action.usecases
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getUseCases = state => state.usecases.data;

// Get post by cuid
export const getUseCase = (state, cuid) => state.usecases.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default UseCaseReducer;
