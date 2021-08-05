import React from 'react';

import MyProfile from '../screens/MyProfile';
import Search from '../screens/Search';

const NavBar = () => {
    return (
        <div class='h-11 m- 11 bg-purple-400 flex justify-start'>
            <div>
                <button>Profile</button>
            </div>
            <div>
                <button>Search</button>
            </div>
            <div>
                <button>Wall of Shame</button>
            </div>
        </div>

    )
}

export default NavBar;