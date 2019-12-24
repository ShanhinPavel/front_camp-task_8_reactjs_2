export const filmDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FILM_DETAILS':
      return { ...action.filmDetails };

    default:
      return state;
  }
};
