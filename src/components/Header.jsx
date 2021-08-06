import React from "react";

import galaxy from "../assets/galaxy.jpg";
import falcon from "../assets/millenium-falcon.png";
import lovebaby from "../assets/love-bb.jpg";

import './Header.css';

const Header = () => {
  return (
    <div className='global-header'>
        <img className='love-baby-image' src={lovebaby} alt='han and leia' />
        <img className='galaxy-image' src={galaxy} alt='galaxy' />
      <img
      className='falcon'
        src={falcon}
        alt='millenium-falcon'
      />
    </div>
  );
};

export default Header;
