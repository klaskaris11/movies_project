import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

/*
* In this component, the button element in used to clear the input text, and is disabled when no text has been registered
*/
function DatatableFilter(props) {
    return (
        <div className='position-relative'>
            <input
                className='form-control'
                type="text"
                placeholder='Search movie...'
                onChange={(e) => props.onFilter(e)}
                value={props.filterText}
            />
            <button
                disabled={props.disabled}
                className='clear-search'
                onClick={() => {
                    props.onClear();
                    ReactTooltip.hide();
                }}
                data-tip="Clear search"
            >
                &times;
            </button>
            <ReactTooltip effect="solid" />
        </div>
    )
}

DatatableFilter.propTypes = {
    disabled: PropTypes.bool,
    filterText: PropTypes.string,
    onClear: PropTypes.func,
    onFilter: PropTypes.func.isRequired
}

export default DatatableFilter
