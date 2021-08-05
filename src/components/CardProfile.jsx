import React from 'react';

const CardProfile = ({ id, name, image }) => {
    return (
        <div class='w-4/12 h-1/3 m-10 bg-gray-700'>
          <h3 class='text-center pb-5'>{name}</h3>
          <img src={image} class='h-full' />
        </div>
    )
}

export default CardProfile;