// Import Actions
import { TOGGLE_ADD_USECASE } from './AppActions';

// Initial State
const initialState = {
  showAddUseCase: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_USECASE:
      return {
        showAddUseCase: !state.showAddUseCase
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddUseCase
export const getShowAddUseCase = state => state.app.showAddUseCase;

// Export Reducer
export default AppReducer;
