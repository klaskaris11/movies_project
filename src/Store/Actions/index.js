import * as actionTypes from './actionTypes';
import { fetchMoviesUrl } from '../../BackendAPI/Urls';
import { getResource } from '../../BackendAPI/CRUDActions';

export const fetchAllMoviesStart = () => {
    return {
        type: actionTypes.FETCH_ALL_MOVIES_START
    }
}

export const fetchAllMoviesSuccess = (moviesData) => {
    return {
        type: actionTypes.FETCH_ALL_MOVIES_SUCCESS,
        payload: moviesData
    }
}

export const fetchAllMoviesFail = (error) => {
    return {
        type: actionTypes.FETCH_ALL_MOVIES_FAIL,
        payload: error
    }
}

export const selectMovie = (episode_id) => {
    return {
        type: actionTypes.SELECT_MOVIE,
        payload: episode_id
    }
}

export const fetchAllMovies = () => {
    return dispatch => {
        dispatch(fetchAllMoviesStart());
        const url = fetchMoviesUrl();
        getResource(url)
            .then(response => {
                dispatch(fetchAllMoviesSuccess(response));
            })
            .catch(error => {
                dispatch(fetchAllMoviesFail(error));
            });
    }
}