import React from 'react'
import PropTypes from 'prop-types'

import GuestList from './guestList'
import Counter from './counter'

const MainContent = props =>
    <div className="main">
        <div>
            <h2>Invitees</h2>
            <label>
                <input type="checkbox"
                       onChange={props.toggleFilter}
                       checked={props.isFiltered}/> Hide those who haven't responded
            </label>
        </div>
        <Counter totalInvited={props.totalInvited}
                 numberAttending={props.numberAttending}
                 numberUnconfirmed={props.numberUnconfirmed}/>
        <GuestList guests={props.guests}
                   toggleConfirmationAt={props.toggleConfirmationAt}
                   toggleEditingAt={props.toggleEditingAt}
                   removeGuestAt={props.removeGuestAt}
                   setNameAt={props.setNameAt}
                   isFiltered={props.isFiltered}
                   pendingGuest={props.pendingGuest}
        />
    </div>;

MainContent.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    numberAttending: PropTypes.number,
    numberUnconfirmed: PropTypes.number,
    totalInvited: PropTypes.number,
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
};


export default MainContent;