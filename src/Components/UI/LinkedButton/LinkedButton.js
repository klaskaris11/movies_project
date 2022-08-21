import React from 'react'
import PropTypes from 'prop-types'

function LinkedButton(props) {
    return (
        <button
            disabled={props.disabled}
            className='clear-search'
            onClick={() => {
                props.onClick();
            }}
            data-tip={props.tooltip}
        >
            {props.text}
        </button>
    )
}

LinkedButton.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.element,
    tooltip: PropTypes.string
}

export default LinkedButton
