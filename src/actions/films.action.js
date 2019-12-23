import { getFilmsByQuery } from '../services/api/get-films-by-search-query';
import { activeLoading } from './active-loading.action';
import { activeError } from './active-error.action';

export const RECEIVE_FILMS = 'RECEIVE_FILMS';

export function receiveFilms(json) {
  return {
    type: RECEIVE_FILMS,
    films: json.data,
  };
}

export const fetchFilms = (params) => (dispatch) => {
  dispatch(activeLoading(true));

  return getFilmsByQuery(params).then(
    (response) => {
      dispatch(activeLoading(false));
      dispatch(receiveFilms(response));
    },
    (error) => {
      dispatch(activeLoading(false));
      dispatch(activeError(true));
    },
  );
};
