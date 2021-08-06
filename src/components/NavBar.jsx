import React from 'react';
import { NavLink } from 'react-router-dom';

import MyProfile from '../screens/MyProfile';
import Search from '../screens/Search';
import StarLove from '../assets/starlovebanner.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='parent-navbar'>
            <div className='child-navbar'>
                <NavLink to='/home'>
                    <button className='button-navbar'>Home</button>
                </NavLink>
            </div>
            <div className='child-navbar'>
                <NavLink to='/MyProfile'>
                    <button className='button-navbar'>Profile</button>
                </NavLink>
            </div>
            <div className='child-navbar'>
                <NavLink to='/Search'>
                    <button className='button-navbar'>Search</button
                ></NavLink>
            </div>
            <div>
                <img className='starlove-navbar' src={StarLove} />
            </div>
            <div className='child-navbar wall'>
                <NavLink to='/favourites' >
                    <button className='button-navbar'>Favourites</button>
                </NavLink>
            </div>
            <div className='child-navbar wall'>
                <NavLink to='/WallOfShame' >
                    <button className='button-navbar'>Wall of Shame</button>
                </NavLink>
            </div>

        </div>

    )
}

export default NavBar;