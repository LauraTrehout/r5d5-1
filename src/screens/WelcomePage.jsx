import React from 'react';

import "tailwindcss/tailwind.css";

import leiaSlave from '../assets/leia-slave-no-bg.png';

const WelcomePage = () => {
  return (
    <div class='w-full h-screen text-center bg-accueil bg-center bg-origin-border bg-no-repeat bg-cover flex flex-col justify-between'>
      <h1 class="mt-14 text-8xl font-bold text-pink-500" style={{ textShadow: '-2px 2px 1px #000, 2px 2px 1px #000, 2px -2px 1px #000,-2px -2px 1px #000, 0 20px 15px rgb(236, 72, 153)'}}
      >STARLOVE</h1>
      <img src={leiaSlave} alt="Img of Leia" style={{ margin: '0 auto 25px auto', maxWidth: '600px'}} />
      <div class="mb-20 space-x-20">
        <button class="px-4 py-2 border-4 border-black font-bold text-lg bg-pink-500 rounded-md">Se Connecter</button>
        <button class="px-4 py-2 border-4 border-black font-bold text-lg bg-pink-500 rounded-md" >Inscription</button>
      </div>
    </div>
  );
}

export default WelcomePage;