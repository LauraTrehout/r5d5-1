import React, { useState, useRef } from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

import iLoveYou from '../assets/loveLukeLeia.png';
import './MyProfile.css';

const MyProfile = () => {

  const [modified, setModified] = useState(true);
  const [message, setMessage] = useState("");
  const [myProfile, setMyprofile] = useState({
    name: "",
    email: "",
    gender: "",
    species: "",
    eyeColor: "",
    height: "",
  })

  const { name, email, gender, species, eyeColor, height } = myProfile;

  const change = (e) => {
    setMyprofile({ ...myProfile, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    setMessage("");
    e.preventDefault();

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("gender", gender);
    sessionStorage.setItem("species", species);
    sessionStorage.setItem("eyeColor", eyeColor);
    sessionStorage.setItem("height", height);

    setMessage("Information modified !");
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="myProfile">
        <div className="myInfoBanner">
          <h2>My Profile</h2>
          <img src={iLoveYou} alt="Img kiss" />
        </div>
        { modified ? <div className="myInfoContainer">
          <form className="myInfo" onSubmit={submit}>

          <div>
            <label htmlFor="name"><span>Name : </span> </label>
            <input type="text" name="name" id="name" />
          </div>

          <div>
            <label htmlFor="mail"><span>Email : </span> </label>
            <input type="email" name="mail" id="mail" />
          </div>

          <div>
            <label htmlFor="gender"><span>Gender : </span> </label>
            <select name="gender" id="gender">
              <option value="Woman">Woman</option>
              <option value="Man">Man</option>
              <option value="A thing with many Hair">A thing with many Hair</option>
              <option value="A thing with many tentacles">A thing with many tentacles</option>
            </select>
          </div>

          <div>
            <label htmlFor="species"><span>Species : </span> </label>
            <select name="species" id="species">
              <option value="Droide">value</option>
            </select>
          </div>

          <div>
            <label htmlFor="eyeColor"><span>Eye color : </span> </label>
            <input type="text" name="eyeColor" id="eyeColor" />
          </div>

          <div>
            <label htmlFor="heigth"><span>Heigth : </span> </label>
            <input type="number" name="heigth" id="heigth" />
          </div>


          </form>
          <button type='submit' name='submit'>Valider</button>
        </div>
        :
          <div className="myInfoContainer">
            <div className="myInfo">
              <p><span>Name : </span> Leia Organa</p>
              <p><span>Email : </span> leiaStarRebelle@force.holo</p>
              <p><span>Gender : </span> Woman</p>
              <p><span>Species : </span> Human</p>
              <p><span>Eye Color : </span> Brown</p>
              <p><span>Heigth : </span> 1m50</p>
            </div>
            <button>Modifier</button>
          </div>
        }
      </div>
    </>
  );
}

export default MyProfile;