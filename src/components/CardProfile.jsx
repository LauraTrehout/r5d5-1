import React from 'react';
import { Link } from 'react-router-dom';

import './CardProfile.css';

const CardProfile = ({ id, name, image }) => {


  return (
    <div className="card-profile">
      <h3>{name}</h3>
      <Link to={`/profile/${id}`}>
        <img src={image} className='card-profile-img' />
      </Link>
    </div>
  )
}

export default CardProfile;