import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from './../components/Header';
import NavBar from './../components/NavBar';
import ShameProfile from '../components/ShameProfile';

import './WallOfShame.css';

const WallOfShame = () => {

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
            <div className="wall-shame-cards">
                {users
                    .filter(user => user.affiliations.includes('Sith'))
                    .map(user => <ShameProfile key={user.id} {...user} />)}
            </div>


        </>
    )
}

export default WallOfShame;