import React from 'react';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';

import * as actions from '../../Store/Actions/index';
import { MovieShape } from '../../Models/MovieShape';

const columns = [
    {
        name: 'Episode',
        selector: row => row.episode_id,
        sortable: true,
    },
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Release Date',
        selector: row => row.release_date,
        sortable: true,
    },
];

function ListMovies(props) {

    //Docs of the following: https://react-data-table-component.netlify.app/
    return (
        <DataTable
            columns={columns}
            data={props.movies}
            selectableRows
            selectableRowsHighlight
            selectableRowsSingle
            selectableRowsVisibleOnly
            onSelectedRowsChange={(data) => props.selectMovie(data.selectedRows[0].episode_id)}
        />
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        loading: state.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
      selectMovie: (episode_id) => dispatch(actions.selectMovie(episode_id)),
    };
  }

ListMovies.propTypes = {
    loading: PropTypes.bool,
    movies: PropTypes.arrayOf(
        PropTypes.exact(MovieShape)
    ),
    selectMovie: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMovies);