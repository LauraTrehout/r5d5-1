import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import NavBar from './../components/NavBar';
import RedLightSaber from '../assets/red-saber.png'
import CardListProfileDark from './../components/CardListProfileDark';
import './DarkSide.css';

const DarkSide = () => {
    const [users, setUsers] = useState([]);
    const [favouriteUsers, setFavouriteUsers] = useState([]);

    useEffect(() => {
        const getUsers = () => {
            axios
                .get('https://miadil.github.io/starwars-api/api/all.json')
                .then(res => setUsers(res.data)
                );
        }
        getUsers();
    }, []);

    const addFavouriteUser = (user) => {
        const newFavouriteList = [...favouriteUsers, user]
        setFavouriteUsers(newFavouriteList);
        console.log(newFavouriteList);
        localStorage.setItem('favourite',JSON.stringify([...favouriteUsers, user]))
    }
    return (
        <>
            <Header />
            <NavBar />
            <div className="dark-side-container">
                <h1>DARK SIDE</h1>
                <p>If you want to go deep into Uranus</p>
                <img src={RedLightSaber} alt='red light saber' className='red-light-saber' />
                <CardListProfileDark users={users} handleFavouriteClick={addFavouriteUser} favouriteUsers={favouriteUsers} />
            </div>
        </>
    )
}

export default DarkSide;
