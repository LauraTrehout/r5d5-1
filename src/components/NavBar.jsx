import React from 'react';

import MyProfile from '../screens/MyProfile';
import Search from '../screens/Search';

const NavBar = () => {
    return (
        <div class='h-1/10 flex justify-start'>
            <button>Profile</button>
            <button>Search</button>
            <button>Wall of Shame</button>
        </div>

    )
}

export default NavBar;