import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import CardProfile from './../components/CardProfile';
import NavBar from './../components/NavBar';

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
            <div>
                <h1>LIGHT SIDE</h1>
                <div class='flex-row flex-wrap m-auto'>
                {users
                .filter(user => user.affiliations.includes('New Republic') || user.affiliations.includes('Resistance'))
                .map(user => (
                    <CardProfile key={user.id} {...user} />
                ))}
                </div>
            </div>
        </>
    )
}

export default LightSide;