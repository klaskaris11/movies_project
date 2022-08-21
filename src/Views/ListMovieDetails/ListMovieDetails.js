import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovieByEpisodeId } from '../../Store/Selectors/MovieSelector';
import { MovieShape } from '../../Models/MovieShape';
import ListMovieDetail from './ListMovieDetail/ListMovieDetail';

function ListMovieDetails(props) {
    return (
        <div>
            {
                props.selectedMovie !== null
                    ? <ListMovieDetail
                        title={props.selectedMovie.title}
                        plot={props.selectedMovie.opening_crawl}
                        director={props.selectedMovie.director}
                        producer={props.selectedMovie.producer}
                        data-testid="list-move-detail"
                    />
                    : <span>Select a movie to read details...</span>
            }
        </div>
    )
}

ListMovieDetails.propTypes = {
    selectedMovie: PropTypes.exact(MovieShape),
}

const mapStateToProps = state => {
    return {
        selectedMovie: getMovieByEpisodeId(state)
    };
}

export default connect(mapStateToProps)(ListMovieDetails);