import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import Connexion from '../components/Connexion'

import './Modal.css'

export const Modal = ( {setShowModal} ) => {

    // ferme le modal en cliquant en dehors du modal.
    const modalRef = useRef();
    const closeModal = (e) => {
      if (e.target === modalRef.current) {
        setShowModal(false);
      }
    } ;
    //rend le JSX modal dans le portail div.
    return ReactDOM.createPortal(
      <div className="modalContainer" ref={modalRef} onClick={closeModal}>
          <div className="modal">
            <Connexion />
            <button className="btnClose" onClick={() => setShowModal(false) }>Close</button>
          </div>
      </div>,
      document.getElementById("modal")
    ) ;

}