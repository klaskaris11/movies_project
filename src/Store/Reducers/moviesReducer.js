import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from "../../Utils/Utils";

const initialState = {
    movies: [],
    error: null,
    loading: false
};

export const fetchMoviesStart = (state) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const fetchMoviesSuccess = (state, action) => {
    const moviesData = action.payload.map(movieData => {
        delete movieData.planets;
        delete movieData.characters;
        delete movieData.species;
        delete movieData.starships;
        delete movieData.vehicles;
        delete movieData.url;
        delete movieData.created;
        delete movieData.edited;
        return movieData;
    });
    
    return updateObject(state, {
        movies: moviesData,
        error: null,
        loading: false
    });
};

const fetchMoviesFail = (state, action) => {
    return updateObject(state, {
        movies: [],
        error: action.payload,
        loading: false,
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_MOVIES_START: return fetchMoviesStart(state);
        case actionTypes.FETCH_ALL_MOVIES_FAIL: return fetchMoviesFail(state, action);
        case actionTypes.FETCH_ALL_MOVIES_SUCCESS: return fetchMoviesSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;