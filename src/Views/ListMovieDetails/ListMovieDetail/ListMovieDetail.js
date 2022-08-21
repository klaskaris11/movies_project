import React from 'react';
import PropTypes from 'prop-types';

// ListMovieDetail Component renders all properties of the movie selected (title, plot, director, producer)

function ListMovieDetail(props) {
  return (
    <div>
        <h3 data-testid="movie-title">{props.title}</h3>
        <p data-testid="movie-plot">{props.plot}</p>
        <hr/>
        <p data-testid="movie-director">Directed by {props.director}</p>
        <p data-testid="movie-producer">Produced by {props.producer}</p>
    </div>
  )
}

ListMovieDetail.propTypes = {
    title: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired
}

export default ListMovieDetail
