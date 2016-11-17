import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_USECASE = 'ADD_USECASE';
export const ADD_USECASES = 'ADD_USECASES';
export const DELETE_USECASE = 'DELETE_USECASE';

// Export Actions
export function addUseCase(usecase) {
  return {
    type: ADD_USECASE,
    usecase
  };
}

export function addUseCaseRequest(usecase) {
  return (dispatch) => {
    return callApi('usecases', 'usecase', {
      usecase: {
        name: usecase.name,
        title: usecase.title,
        content: usecase.content
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

export function fetchUseCase(cuid) {
  return (dispatch) => {
    return callApi(`usecases/${cuid}`).then(res => dispatch(addUseCase(res.usecase)));
  };
}

export function deleteUseCase(cuid) {
  return {
    type: DELETE_USECASE,
    cuid
  };
}

export function deleteUseCaseRequest(cuid) {
  return (dispatch) => {
    return callApi(`usecases/${cuid}`, 'delete').then(() => dispatch(deleteUseCase(cuid)));
  };
}
