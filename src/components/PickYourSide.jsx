import React from 'react';

import chewbacca from '../assets/chewbacca-head.png';
import missa from '../assets/missa-middle-finger.png';

const Side = () => {
    return (
        <div class='flex'>
          <div class='bg-lightside h-1/8 w-1/2'>
            <img class='h-1/4' src={chewbacca} alt='the light side' />
          </div>
          <div class='bg-darkside w-1/2'>
            <img class='h-1/4' src={missa} alt='the dark side' />
          </div>
        </div>
    )
}

export default Side;