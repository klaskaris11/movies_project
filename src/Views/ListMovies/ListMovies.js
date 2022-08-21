import React, { useState } from 'react';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import * as actions from '../../Store/Actions';
import { MovieShape } from '../../Models/MovieShape';
import { Row } from '../../Components/UI/Grid/Grid';
import DatatableFilter from '../../Components/UI/DatatableFilter/DatatableFilter';

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

    const [filterText, setFilterText] = useState('');
    const [toggledClearRows, setToggledClearRows] = useState(false);

    const filteredItems = props.movies.filter(
        movie => movie.title && movie.title.toLowerCase().includes(filterText.toLowerCase()),
    );

    const clearDatagridSelection = () => {
        setToggledClearRows(!toggledClearRows);
        props.selectMovie(null);
    }

    //Docs of the following: https://react-data-table-component.netlify.app/
    return (
        <>
            <Row classes={["mt-2", "p-3"]}>
                <DatatableFilter
                    disabled={isEmpty(filterText)}
                    filterText={filterText}
                    onFilter={e => {
                        setFilterText(e.target.value);
                        clearDatagridSelection();
                    }}
                    onClear={() => {
                        setFilterText("");
                        clearDatagridSelection();
                    }}
                />
            </Row>
            <Row>
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    striped
                    selectableRows
                    selectableRowsHighlight
                    selectableRowsSingle
                    selectableRowsVisibleOnly
                    onSelectedRowsChange={(data) => isEmpty(data.selectedRows) ? props.selectMovie(null) : props.selectMovie(data.selectedRows[0].episode_id)}
                    clearSelectedRows={toggledClearRows}
                />
            </Row>
        </>
    )
}

ListMovies.propTypes = {
    loading: PropTypes.bool,
    movies: PropTypes.arrayOf(
        PropTypes.exact(MovieShape)
    ),
    selectMovie: PropTypes.func
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

export default connect(mapStateToProps, mapDispatchToProps)(ListMovies);