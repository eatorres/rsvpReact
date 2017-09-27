import React from 'react'
import PropTypes from 'prop-types'

import Guest from './guest'
import PendingGuest from '../pendingGuest'

const GuestList = props =>
    <ul>
        <PendingGuest name={props.pendingGuest}/>
        {props.guests
            .filter(guest => !props.isFiltered || guest.isConfirmed)
            .map((guest, index) =>
            <Guest key={index}
                   name={guest.name}
                   setName={text => props.setNameAt(text, index)}
                   isEditing={guest.isEditing}
                   isConfirmed={guest.isConfirmed}
                   handleConfirmation={() => props.toggleConfirmationAt(index)}
                   handleToggleEditing={() => props.toggleEditingAt(index)}
                   handleRemove={() => props.removeGuestAt(index)}
            />
        )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired
};

export default GuestList;