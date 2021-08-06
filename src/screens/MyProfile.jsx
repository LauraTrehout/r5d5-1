import React, { useState, useRef } from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

import iLoveYou from '../assets/loveLukeLeia.png';
import bb8 from '../assets/bb8.png';

import './MyProfile.css';

const MyProfile = () => {

  const runbb8 = (event) => {
    // event.preventDefault();
    event.target.style.animation = "runbb8 4s ease-in";
  }

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

    localStorage.setItem('myProfile', JSON.stringify(myProfile));

    setModified(false)
  };

  const profil = JSON.parse(localStorage.getItem('myProfile') || '[]')


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
            <input type="text" name="name" id="name" placeholder='Enter Name' value={name} onChange={change}/>
          </div>

          <div>
            <label htmlFor="email"><span>Email : </span> </label>
            <input type="text" name="email" id="email" placeholder='Enter Holomail' value={email} onChange={change}/>
          </div>

          <div>
            <label htmlFor="gender"><span>Gender : </span> </label>
            <select name="gender" id="gender" value={gender} onChange={change}>
              <option value="Woman">Woman</option>
              <option value="Man">Man</option>
              <option value="A thing with many Hair">A thing with many Hair</option>
              <option value="A thing with many tentacles">A thing with many tentacles</option>
            </select>
          </div>

          <div>
            <label htmlFor="species"><span>Species : </span> </label>
            <select name="species" id="species" value={species} onChange={change}>
              <option value="Droide">Sith</option>
              <option value="wookiee">Wookie</option>
              <option value="droid">Droide</option>
              <option value="human">Human</option>
              <option value="hutt">Hutt</option>
              <option value="rodian">Rodian</option>
              <option value="trandoshan">Trandoshan</option>
              <option value="ewok">Ewok</option>
              <option value="yoda's species">Petite grenouille des marais</option>
            </select>
          </div>

          <div>
            <label htmlFor="eyeColor"><span>Eye Color : </span> </label>
            <input type="text" name="eyeColor" id="eyeColor" placeholder='Enter Eye color' value={eyeColor} onChange={change}/>
          </div>

          <div>
            <label htmlFor="height"><span>Heigth : </span> </label>
            <input type="number" name="height" id="height" placeholder='Enter your Height' value={height} onChange={change}/>
          </div>

          { message && <span>{message}</span>}

          <div>
            <button type='submit' name='submit'>Valider</button>
          </div>
          </form>
        </div>
        :
          <div className="myInfoContainer">
            <div className="myInfo">
              <p><span>Name : </span> {name}</p>
              <p><span>Email : </span> {email}</p>
              <p><span>Gender : </span> {gender}</p>
              <p><span>Species : </span> {species}</p>
              <p><span>Eye Color : </span> {eyeColor}</p>
              <p><span>Heigth : </span> {height}</p>
              <button onClick={() => setModified(true)} >Modifier</button>
            </div>
          </div>
        }
        <div className="bb8" ><img src={bb8} alt="Img of bb8" onClick={(event) => runbb8(event)}/></div>
      </div>
    </>
  );
}

export default MyProfile;