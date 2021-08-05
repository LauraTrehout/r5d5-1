import React from 'react';

import galaxy from '../assets/galaxy.jpg';
import falcon from '../assets/millenium-falcon.png';
import lovebaby from '../assets/love-bb.jpg';


const Header = () => {
    return (
        <div class='w-full  flex justify-center  '>
            <div class=''>
                <img class='h-72 w-full' src={lovebaby} alt='han and leia'/>
            </div>
            <div class='w-full'>
                <img class='h-72 w-full relative' src={galaxy} alt='galaxy'/>
            </div>
                <img class='self-end w-24 absolute' src={falcon} alt='millenium-falcon'/>
        </div>   

    )
}


export default Header;