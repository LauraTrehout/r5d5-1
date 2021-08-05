import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import CardProfile from './../components/CardProfile';
import NavBar from './../components/NavBar';
import RedLightSaber from '../assets/red-lightsaber.png'

import './DarkSide.css';

const DarkSide = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = () => {
            axios
                .get('https://miadil.github.io/starwars-api/api/all.json')
                .then(res => setUsers(res.data)
                );
        }
        getUsers();
    }, []);

    return (
        <>
            <Header />
            <NavBar />
            <div className="dark-side-container">
                <h1>DARK SIDE</h1>
                <p>If you want to go deep into Uranus</p>
                <img src={RedLightSaber} alt='red light saber' className='red-light-saber' />
                
                <div className='dark-cards'>
                {users
                .filter(user => user.affiliations.includes('Sith') || user.affiliations.includes('Galactic Empire'))
                .map(user => (
                    <CardProfile key={user.id} {...user} />
                ))}
                </div>
            </div>
        </>
    )
}

export default DarkSide;
