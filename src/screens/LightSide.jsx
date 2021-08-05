import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import CardProfile from './../components/CardProfile';
import NavBar from './../components/NavBar';
import GreenLightSaber from '../assets/green-lightsaber.png'

import './LightSide.css';

const LightSide = () => {
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
            <div className="light-side-container">
                <h1>LIGHT SIDE</h1>
                <p>If you want to go deep into a relationship</p>
                <img src={GreenLightSaber} alt='green light saber' className='green-light-saber' />
                <div className='light-cards'>
                    {users
                        .filter(user => user.affiliations.includes('New Republic') && user.name!='Mon Mothma' || user.affiliations.includes('Resistance') && user.name!='Mon Mothma')
                        .map(user => (
                            <CardProfile key={user.id} {...user} />
                        ))}
                </div>
            </div>
        </>
    ) 
}

export default LightSide;