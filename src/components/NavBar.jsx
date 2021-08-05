import React from 'react';
import { NavLink } from 'react-router-dom';

import MyProfile from '../screens/MyProfile';
import Search from '../screens/Search';
import StarLove from '../assets/starlovebanner.png';

const NavBar = () => {
    return (
        <div class='flex justify-around' style={{ backgroundColor: '#91709b' }}>
            <div class='m-5 text-white' style={{ fontSize: '30px' }}>
                <NavLink to='/MyProfile' stytle={{
                    color: 'white',
                    textDecoration: 'underlined'
                }}>
                    <button>Profile</button></NavLink>
            </div>
            <div class='m-5 text-white' style={{ fontSize: '30px' }}>
                <NavLink to='/Search'><button>Search</button></NavLink>
            </div>
            <div>
                <img src={StarLove} />
            </div>
            <div class='m-5 text-white' style={{ fontSize: '30px' }}>
                <NavLink to='/WallOfShame' activeStyle={{
                    color:'white',
                    borderBottom:'solid white 2px'
                }}>
                    <button class=''>Wall of Shame</button></NavLink>
            </div>

        </div>

    )
}

export default NavBar;