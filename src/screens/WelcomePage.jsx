
import Connexion from '../components/Connexion';
import ReactCircleModal from 'react-circle-modal'

import "tailwindcss/tailwind.css";
import './WelcomePage.css';

import leiaSlave from '../assets/leia-slave-no-bg.png';

const WelcomePage = () => {




  return (
    <div class='w-full h-screen text-center bg-accueil bg-center bg-origin-border bg-no-repeat bg-cover flex flex-col justify-between'>
      <h1 class="mt-14 text-8xl font-bold text-pinka" style={{ textShadow: '-2px 2px 1px #000, 2px 2px 1px #000, 2px -2px 1px #000,-2px -2px 1px #000, 0 20px 15px rgb(236, 72, 153)'}}
      >STARLOVE</h1>
      <img src={leiaSlave} alt="Img of Leia" style={{ margin: '0 auto 25px auto', maxWidth: '600px'}} />
      <div class="mb-20 space-x-20">
        <ReactCircleModal
      backgroundColor="rgba(0,0,0,0.5)"
      toogleComponent={onClick => (
        <button class="w-40 px-4 py-2 border-4 border-black font-bold text-lg bg-pinka rounded-md" onClick={onClick}>
          Se Connecter
        </button>
      )}
      // Optional fields and their default values
      offsetX={100}
      offsetY={100}
    >
      {(onClick) => (
        <div className="modal" style={{ padding: '1em' }}>
          <Connexion />
          <button className='btnClose'  onClick={onClick}>
            Close
          </button>
        </div>
      )}
        </ReactCircleModal>
        <button class="w-40 px-4 py-2 border-4 border-black font-bold text-lg bg-pinka rounded-md">Inscription</button>
      </div>
    </div>
  );
}

export default WelcomePage;