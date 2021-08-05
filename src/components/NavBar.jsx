import React from 'react';
import { Link } from 'react-router-dom';

import MyProfile from '../screens/MyProfile';
import Search from '../screens/Search';
import StarLove from '../assets/starlovebanner.png';

const NavBar = () => {
    return (
        <div class='flex justify-center' style={{backgroundColor:'#91709b'}}>
            <div class='m-5 text-white' style={{fontSize:'30px'}}>
                <Link to='/MyProfile'><button>Profile</button></Link>
            </div>
            <div class='m-5 text-white' style={{fontSize:'30px'}}>
                <Link to='/Search'><button>Search</button></Link>
            </div>
            <div>
                <img src={StarLove} />
            </div>
            <div class='m-5 text-white' style={{fontSize:'30px'}}>
                <Link to='/WallOfShame'><button class=''>Wall of Shame</button></Link>
            </div>
            
        </div>

    )
}

export default NavBar;