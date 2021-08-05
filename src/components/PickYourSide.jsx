import React from 'react';

import chewbacca from '../assets/chewbacca-head.png';
import missa from '../assets/missa-middle-finger.png';


const Side = () => {
    return (
        <div class='flex'>
          <div class='flex justify-center items-center bg-lightside w-1/2'>
            <div class='w-full min-h'>
              <h2 class='text-right'>PICK YO</h2>
              <img class='justify-self-center w-30 h-52' src={chewbacca} alt='the light side' />
              <p>Looking for a relationship</p>
            </div>
          </div>
          <div class='flex items-center justify-center bg-darkside w-1/2'>
           <div class='w-full '>
              <h2>UR SIDE</h2>
              <img class='w-30 h-52' src={missa} alt='the dark side' />
              <p>Looking for a one night stand</p>
           </div>
          </div>        
        </div>
    )
}

export default Side;