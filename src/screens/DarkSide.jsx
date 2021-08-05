import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import CardProfile from './../components/CardProfile';
import NavBar from './../components/NavBar';

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
            <div>
                <h1>DARK SIDE</h1>
                <div className='global-card'>
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
