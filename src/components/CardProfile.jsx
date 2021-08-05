import React from 'react';

import './CardProfile.css';

const CardProfile = ({ id, name, image }) => {
    return (
        <div className="card-profile">
          <h3>{name}</h3>
          <img src={image} className='card-img-dark' />
        </div>
    )
}

export default CardProfile;