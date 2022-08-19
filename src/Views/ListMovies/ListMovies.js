import React from 'react';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';

import { MovieShape } from '../../Models/MovieShape';

const columns = [
    {
        name: 'Episode',
        selector: row => row.episode_id,
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Release Date',
        selector: row => row.release_date,
    },
];

function ListMovies(props) {
    return (
        <DataTable
            columns={columns}
            data={props.movies}
        />
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        loading: state.loading
    };
}

ListMovies.propTypes = {
    loading: PropTypes.bool,
    movies: PropTypes.arrayOf(
        PropTypes.exact(MovieShape)
    )
}

export default connect(mapStateToProps)(ListMovies);