import React from 'react';
import PropTypes from 'prop-types';

function ListMovieDetail(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.plot}</p>
        <hr/>
        <p>Directed by {props.director}</p>
        <p>Produced by {props.producer}</p>
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
