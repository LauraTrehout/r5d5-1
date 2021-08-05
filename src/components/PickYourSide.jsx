import React from 'react';

import chewbacca from '../assets/chewbacca-head.png';
import missa from '../assets/missa-middle-finger.png';

const Side = () => {
    return (
        <div>
          <h1>Pick your side</h1>
          <div class=''>
            <img src={chewbacca} alt='the light side' />
          </div>
          <div class=''>
            <img src={missa} alt='the dark side' />
          </div>
        </div>
    )
}

export default Side;