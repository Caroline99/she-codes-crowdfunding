import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            {/* TODO remove the next line */}
            {/* <Link to='/project'>Project</Link> */}
        </nav>
    )
}

export default Nav;