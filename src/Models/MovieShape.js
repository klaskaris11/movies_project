// Shape of the movie object

import PropTypes from 'prop-types';

export const MovieShape = {
    title: PropTypes.string,
    episode_id: PropTypes.number,
    opening_crawl: PropTypes.string,
    director: PropTypes.string,
    producer: PropTypes.string,
    release_date: PropTypes.string
}