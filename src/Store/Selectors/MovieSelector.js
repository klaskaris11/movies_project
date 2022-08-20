// a selector to return currently selected movie
export const getMovieByEpisodeId = (state) => {
    return state.movies.find(movie => movie.episode_id === state.selectedMovie) ?? null;
}