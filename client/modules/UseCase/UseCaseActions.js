import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_USECASE = 'ADD_USECASE';
export const ADD_USECASES = 'ADD_USECASES';

// Export Actions
export function addUseCase(usecase) {
  return {
    type: ADD_USECASE,
    usecase
  };
}

export function addUseCaseRequest(usecase) {
  return (dispatch) => {
    return callApi('usecases', 'post', {
      usecase: {
        title: usecase.title,
        body: usecase.body,
        milestones: usecase.milestones
      }
    }).then(res => dispatch(addUseCase(res.usecase)));
  };
}

export function addUseCases(usecases) {
  return {
    type: ADD_USECASES,
    usecases
  };
}

export function fetchUseCases() {
  return (dispatch) => {
    return callApi('usecases').then(res => {
      dispatch(addUseCases(res.usecases));
    });
  };
}
