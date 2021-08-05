import React from 'react';

const MyProfile = () => {
  return (
    <section>
      <div>
        <h2>Create Your Profile</h2>
        <img src="" alt="Img kiss" />
      </div>
      <form action="">
        <input type="text" name="name" id="" />
        <input type="email" name="holoMail" id="" />
        <select name="gender" id=""></select>
        <select name="species" id=""></select>
        <input type="text" name="eyeColor" id="" />
        <input type="date" name="age" id="" />
        <input type="number" name="heigth" id="" />
      </form>
      {/* 
        Ou Afficher les information
        <div>
          <p>Name: {name}</P>
          <p>Email: {email}</P>
          <p>Gender: {gender}</P>
          <p>Species: {species}</P>
          <p>Eye Color: {Eye Color}</P>
          <p>Heigth: {Heigth}</P>
        </div>
      */}
      <button type="submit"></button> {/* button modifier */}
    </section>
  );
}

export default MyProfile;