import { useState } from 'react';
import ChatBotComp from '../components/ChatBotComp';

import galaxy from "../assets/galaxy.jpg";
import falcon from "../assets/millenium-falcon.png";
import lovebaby from "../assets/love-bb.jpg";


import './Header.css';

const Header = () => {

  const [chat, setChat] = useState(false);

  const handleClick = () => {
    setChat(!chat);
  }

  return (
    <div className='global-header'>
        <img className='love-baby-image' src={lovebaby} alt='han and leia' />
        <img className='galaxy-image' src={galaxy} alt='galaxy' />
        <button onClick={handleClick}>
          <img className='falcon' src={falcon} alt='millenium-falcon'/>
        </button>
        <div className='chatbot'>
          {chat && <ChatBotComp />}
        </div>
      
      
    </div>
  );
};

export default Header;
