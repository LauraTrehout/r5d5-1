import React, {useState} from 'react';

import { Modal } from './Modal';

import "tailwindcss/tailwind.css";

import leiaSlave from '../assets/leia-slave-no-bg.png';

const WelcomePage = () => {

  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };
  // return (
  //   <div className="App">
  //     <h1>Popup Modal</h1>
  //     <button onClick={openModal}>Open Modal</button>
  //     {showModal ? <Modal setShowModal={setShowModal} /> : null}
  //   </div>
  // );

  return (
    <div class='w-full h-screen text-center bg-accueil bg-center bg-origin-border bg-no-repeat bg-cover flex flex-col justify-between'>
      <h1 class="mt-14 text-8xl font-bold text-pinka" style={{ textShadow: '-2px 2px 1px #000, 2px 2px 1px #000, 2px -2px 1px #000,-2px -2px 1px #000, 0 20px 15px rgb(236, 72, 153)'}}
      >STARLOVE</h1>
      <img src={leiaSlave} alt="Img of Leia" style={{ margin: '0 auto 25px auto', maxWidth: '600px'}} />
      <div class="mb-20 space-x-20">
        <button class="w-40 px-4 py-2 border-4 border-black font-bold text-lg bg-pinka rounded-md" onClick={openModal}>Se Connecter</button>
        <button class="w-40 px-4 py-2 border-4 border-black font-bold text-lg bg-pinka rounded-md" >Inscription</button>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default WelcomePage;