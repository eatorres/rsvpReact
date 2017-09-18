import React from 'react'
import PropTypes from 'prop-types'
import Guest from './guest'

const GuestList = props =>
    <ul>
        {props.guests.map((guest, index) =>
            <Guest name={guest.name} isConfirmed={guest.isConfirmed}/>
        )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
};

export default GuestList;