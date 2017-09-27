import React from 'react'
import PropTypes from 'prop-types'

const Header = props =>
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={props.newGuestsSubmitHandler}>
            <input
                type="text"
                onChange={props.handleNameInput}
                value={props.pendingGuest}
                placeholder="Invite Someone"/>
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
    </header>;

Header.propTypes = {
    newGuestsSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired,
};


export default Header;
