import React from 'react';

import Header from '../components/Header'
import NavBar from '../components/NavBar'

import iLoveYou from '../assets/loveLukeLeia.png';

const MyProfile = () => {

  return (
    <>
      <Header />
      <NavBar />
      <div className="myProfile">
        <div className="myInfoBanner">
          <h2>My Profile</h2>
          <img src={iLoveYou} alt="Img kiss" />
        </div>
        {/* <form action="">
          <input type="text" name="name" id="" />
          <input type="email" name="holoMail" id="" />
          <select name="gender" id="">
            <option value="Woman"></option>
          </select>
          <select name="species" id="">
            <option value="Droide"></option>
          </select>
          <input type="text" name="eyeColor" id="" />
          <input type="date" name="age" id="" />
          <input type="number" name="heigth" id="" />
        </form> */}
          <div className="myInfoContainer">
            <div className="myInfo">
              <p>Name: Leia Organa</p>
              <p>Email: leiaStarRebelle@force.holo</p>
              <p>Gender: Woman</p>
              <p>Species: Human</p>
              <p>Eye Color: Brown</p>
              <p>Heigth: 1m50</p>
            </div>
            <button type="submit"></button> {/* button modifier */}
          </div>

      </div>
    </>
  );
}

export default MyProfile;