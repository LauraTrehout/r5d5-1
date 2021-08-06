import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import NavBar from './../components/NavBar';
import GreenLightSaber from '../assets/green-lightsaber.png'
import CardListProfileLight from './../components/CardListProfileLight';

import './LightSide.css';

const LightSide = () => {
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
console.log(users);
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
            <div className="light-side-container">
                <h1>LIGHT SIDE</h1>
                <p>If you want to go deep into a relationship</p>
                <img src={GreenLightSaber} alt='green light saber' className='green-light-saber' />
                <CardListProfileLight users={users} handleFavouriteClick={addFavouriteUser} favouriteUsers={favouriteUsers} />
            </div>
        </>
    )
}

export default LightSide;
