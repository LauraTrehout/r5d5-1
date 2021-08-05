import React from 'react';

import leiaSlave from '../assets/leia-slave.jpg';

const WelcomePage = () => {
  return (
    <div class="bg-accueil bg-clip-border bg-center bg-no-repeat bg-cover">
      <h1>STARLOVE</h1>
      <img src={leiaSlave} alt="Img of Leia" />
      <div> 
        <button>Se Connecter</button>
        <button>Inscription</button>
      </div>
    </div>
  );
}

export default WelcomePage;