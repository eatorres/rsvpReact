import React from 'react'
import PropTypes from 'prop-types'

import GuestName from './guestName'

const Guest = props =>
    <li>
        <GuestName
            isEditing={props.isEditing}
            handleNameEdits={e => props.setName(e.target.value)}>
            {props.name}
        </GuestName>
        <label>
            <input type="checkbox"
                   checked={props.isConfirmed}
                   onChange={props.handleConfirmation}/> Confirmed
        </label>
        <button onClick={props.handleToggleEditing}>
            {props.isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={props.handleRemove}>
            remove
        </button>
    </li>;

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleToggleEditing: PropTypes.func.isRequired
};

export default Guest;