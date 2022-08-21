import React from 'react';
import PropTypes from 'prop-types';

function Spinner(props) {
    return (
        <div className='text-center'>
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p data-testid="spinner-text">{props.text}</p>
        </div>
    )
}

Spinner.propTypes = {
    text: PropTypes.string
 }

 export default Spinner;